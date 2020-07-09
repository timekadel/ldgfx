
app.directive("bottomSheet", function(Bottomsheet, Backdrop) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            option:'@',
            title:'@'
        },
        template:
                '<div class="ldgfx-bottomsheet" ng-show="displayBottomsheet" elevation="1" ng-transclude>'+
                    '<div class="ldgfx-bottomsheet-header">'+
                        '<h3>{{ title }}</h3>'+
                    '</div>'+
                    '<fluid-container direction="row">'+
                        '<fluid-container ng-click="option.action();hideBottomSheet()" direction="column" ng-repeat="option in options" style="padding:16px 0;display:flex;flex:1">'+
                            '<i autoalign class="material-icons" style="color: rgba(0, 0, 0, 0.54); margin-bottom: 8px; font-size: 48px;">{{ option.icon }}</i>'+
                            '<p autoalign>{{ option.title }}</p>'+
                        '</fluid-container>'+
                    '</fuid-container>'+
                '</div>',
        controller: function($scope,$timeout){

            $scope.displayBottomsheet = false;  //Bottom sheet is closed by default
            
            $scope.hideBottomSheet = function(){
                Backdrop.hide();
                $scope.displayBottomsheet = false;      //Hiding any previous toast
            }

            $scope.$on('bottomsheet-display',function(){
                $timeout(function(){
                    Backdrop.setCloseAction($scope.hideBottomSheet);
                    Backdrop.display();
                    $scope.title = Bottomsheet.title;
                    $scope.options = Bottomsheet.options;   //Fetching message from factory
                    $scope.displayBottomsheet = true;       //Displaying toast on screen*/          
                })

            })


        }
    };
})