app.directive("navBarLeft",function( $compile,  $timeout) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{},
        template:   '<div ng-show="displayed" class="ldgfx-nav-bar ldgfx-nav-bar-left" >'+
                        '<tool-bar ng-show="displayHeader" primary="A700" style="z-index:30"></tool-bar>'+
                        '<tool-bar ng-show="displayHeader" primary="A700" style="z-index:30">'+
                            '<font-icon autoalign clickable="true" ng-click="hideNavBar()" icon="arrow_back"></font-icon>'+
                            '<h2 style="margin-left:16px;" autoalign fill><language vocabulary="navBarLeft.vocabularyObject.global.title"></language></h2>'+
                        '</tool-bar>'+
                        '<progress-indeterminate ng-hide="ready"></progress-indeterminate>'+
                        '<ng-include src="navBarLeft.templateUrl"></ng-include>'+
                    '</div>', 
        controller: function($scope){

            $scope.navBarLeft       = null;
            $scope.displayHeader    = true
            $scope.ready            = false;

            $scope.hideNavBar = function(){
                $scope.navBarLeft       = null;
                $scope.displayHeader    = true;
                $scope.displayed        = false;
                $scope.ready            = false;
            }

            $scope.$on('navBarLeft-display',function(event, navBar){
                $timeout(function(){
                    $scope.navBarLeft   = navBar;
                    $scope.displayed    = true;
                })
            })

            $scope.$on('navBarLeft-hide',function(event, navBar){
                $timeout(function(){
                    $scope.hideNavBar();
                })
            })

            $scope.$on('navBarLeft-contentReady',function(){
                $timeout(function(){
                    $scope.ready = true;
                })
            })

            $scope.$on('navBarLeft-displayHeader',function(event, displayed){
                $timeout(function(){
                    displayed ? $scope.displayHeader = true : $scope.displayHeader = false; 
                })
            })

        }
    };
})


app.directive("navBarRight",function($compile,$timeout,ResourcesFactory) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<div ng-show="displayed"  class="ldgfx-nav-bar ldgfx-nav-bar-right ldgfx-nav-bar-push" ng-transclude>'+
                        '<tool-bar style="z-index:50" primary="500">'+
                            '<font-icon autoalign clickable="true" ng-click="hideNavBarRight()" icon="close"></font-icon>'+
                            '<h2 style="margin-left:16px;" autoalign fill>'+
                                '<language vocabulary="navBarRight.vocabularyObject.global.title"></language>'+
                            '</h2>'+
                            '<menu autoalign anchor-x="left" items="headerOptions"></menu>'+
                        '</tool-bar>'+
                        '<tool-bar primary style="z-index:30"></tool-bar>'+
                        '<loader-indeterminate ng-hide="ready"></loader-indeterminate>'+
                        '<ng-include src = "navBarRight.templateUrl"></ng-include>'+  
                    '</div>',
        controller: function($scope){
  
            $scope.navBarRight = null;

            $scope.hideNavBarRight = function(){
                $scope.navBarRight  = null;
                $scope.displayed    = false;
                ResourcesFactory.displayedPage.panes.right[0].display();
            }

            var createHeaderOptions = function(){
                $scope.headerOptions = ResourcesFactory.displayedPage.panes.right.map(function(pane) {
                    return {
                        description: pane.view.title,
                        action: function(){
                            pane.display();  
                        }
                    }
                });
                console.log($scope.headerOptions);
            }

            $scope.$on('navBarRight-display',function(event, navBar){
                $timeout(function(){
                    $scope.navBarRight  = navBar;
                    $scope.displayed    = true;
                    createHeaderOptions();
                })
            })

        }
    };
})