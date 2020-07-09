
 app.directive("menu",function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            items:'='
        },
        template:   '<div class="ldgfx-menu">'+ 
                        '<font-icon clickable="true" ng-click="displayMenu()" icon="more_vert"></font-icon>'+
                        '<card elevation="2" class="ldgfx-menu-card" ng-show="displayMenuStatus">'+
                            '<fluid-container direction="column">'+
                                '<div class="ldgfx-menu-item" ng-click="item.action();hideMenu();" ng-repeat="item in items" fill>'+
                                    '<div class="ldgfx-textual-list-subheading">'+
                                        '<language vocabulary="item.description"></language>'+
                                    '</div>'+
                                '</div>'+
                            '</fluid-container>'+
                        '</card>'+
                    '</div>',
        controller: function($scope,$element,$compile){

            $scope.displayMenuStatus = false;
            let backdrop = $compile('<div ng-click="hideMenu()" class="ldgfx-menu-background"></div>')($scope);
            
            $scope.displayMenu = function(){
                $scope.displayMenuStatus = true;
                $($element).append(backdrop);
            }

            $scope.hideMenu = function(){
                $scope.displayMenuStatus = false;
                $(backdrop).remove();
            }

        },
        link: function(scope, elem, attrs){

            $(elem).children('.ldgfx-menu-card').addClass(({
                'left':'anchor-left',
                'right':'anchor-right',
            })[attrs.anchorX]);

            $(elem).children('.ldgfx-menu-card').addClass(({
                'top':'anchor-top',
                'bottom':'anchor-bottom',
            })[attrs.anchorY]);

        }
     
    };
})


 app.directive("listMenu",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            menuTitle:'='
        },
        template:   '<div>'+
                        '<perfect-list class="ldgfx-list-menu-options" ng-show="displayList" >'+
                            '<perfect-list-item ng-click="displayOption($index)" ng-repeat="option in options">'+
                                '<font-icon autoalign icon="{{ option.icon }}" style="color:rgba(0,0,0,.74);margin-left:16px;margin-right:16px;"></font-icon>'+
                                '<div class="ldgfx-perfectlist-text">'+
                                    '<div class="ldgfx-textual-list-heading"><language vocabulary="option.description.title"></language></div>'+
                                '</div>'+
                            '</perfect-list-item>'+
                        '</perfect-list>'+
                        '<div class="ldgfx-list-menu-option" ng-hide="displayList" ng-transclude></div>'+
                        '<button-fab ng-show="!displayList" ng-click="backToMenu()" icon="keyboard_return"></button-fab>'+
                    '</div>',
        controller: function($scope, $timeout, NavBarLeft){

            $scope.options      = [];                   //Initializing scope's array "options"
            $scope.displayList  = true;                 //Initializing menu to display option list
            

            /**
             * Displays an option of the scope's array "options"
             * @param {integer} index the index of the option to be displayed
             */
            $scope.displayOption = function(index){

                $scope.options.forEach(function(option){    //Looping through each options of the menu
                    option.displayed = false;               //Setting every options as "not displayed"
                })

                $scope.displayList  = false;
                $scope.title        = $scope.options[index].description.title;
                $scope.returnAction = $scope.backToMenu;
                $scope.menuIcon     = 'close';

                $scope.options[index].displayed = true;     //Setting selected option as displayed

            }

            /**
             * Displays an option of the scope's array "options"
             * @param {integer} index the index of the option to be displayed
             */
            $scope.backToMenu = function(index){
                $scope.displayList  =  true;
            }


            /**
             * Adds an option into the scope's array "options"
             * @param {$scope} option the scope of the option which needs to be added
             */
            this.addOption = function(option){
                $scope.options.push(option);                       //Pushing new option into the scope's options array
            }

        }

    };
})

 app.directive("menuOption", function() {
    return {
        restrict: 'AE',
        require:'^listMenu',
        transclude: true,
        replace: false,
        scope:{
            icon:'@',
            description:'='
        },
        template:  '<div ng-transclude ng-show="displayed"></div>',
        link: function(scope, element, attrs, listMenuCtrl){
            listMenuCtrl.addOption(scope);
        },

    };
})