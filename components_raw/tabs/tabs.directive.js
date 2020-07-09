app.directive('tabs',function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<span style="background:inherit;">'+
                        '<fluid-container style="background:inherit;height:calc(100% - 56px)" direction="column" ng-init="display(tabs[0])">'+
                            '<tool-bar mobile-shadow class="ldgfx-tabs-toolbar">'+
                                '<li ripple autoalign ng-repeat="tab in tabs" ng-click="display(tab);tab.action()" class="ldgfx-tab" ng-class="{active:tab.displayed,backward:backward,forward:!backward}">'+
                                    '<div class="ldgfx-tab-title ldgfx-textual-button" autoalign>'+
                                        '<language vocabulary="tab.title"></language>'+
                                    '</div>'+
                                    '<div class="ldgfx-tab-borderbottom" ng-show="tab.displayed"></div>'+
                                '</li>'+
                            '</tool-bar>'+
                            '<div fill ng-class="{backward:backward,forward:!backward}" class="ldgfx-tab-content" ng-transclude></div>'+
                        '</fluid-container>'+
                    '</span>',
        controller: function ($scope, $timeout) {

            /***
             * NO Time, but would be easier to extend the stepper for this.. since only tabs must be displayed
             * And content is just allocated to clicks on these tabs
             */
            let tabs = $scope.tabs = []; 
            var currentIndex = -1;

            $scope.backward = true;

            $scope.display = function(currentTab){

                let newIndex = tabs.indexOf(currentTab);

                if(newIndex > currentIndex){
                    $scope.backward = false;
                }else if(newIndex < currentIndex){
                    $scope.backward= true;
                }

                angular.forEach(tabs,function(tab) {
                    tab.displayed = false;
                });


                if(currentTab) currentTab.displayed = true; //TODO: FIx this line, it's proper shit
                currentIndex = newIndex;

            }

            this.addTab = function(tab) {
                if(tabs.length === 0) $scope.display(tab);
                tabs.push(tab);
            }

        }
    };
})

app.directive('tab',function() {
    return {
        require: '^tabs',
        restrict: 'E', 
        transclude: true,
        replace: true,
        scope:{ 
            title: '=',
            action: '='
        },
        link: function(scope, element, attrs, tabsCtrl){
            tabsCtrl.addTab(scope);
        },
        template:   '<div class="ldgfx-tab-container" ng-show="displayed" ng-transclude></div>',
    };
}) 