app.directive("buttonFlat",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'text':'='
        },
        template:   '<button ripple class="ldgfx-button-flat">'+
                        '<text-button autoalign><language vocabulary="text"></language></text-button>'+
                    '</button>',
        css: '/partials/button/button.style.css',
        link: function(scope,elem){
            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }

    };
})

app.directive("buttonRaised",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            'text':'=',
        },
        template:   '<button class="ldgfx-button-raised" elevation="1" ripple>'+
                        '<text-button><language vocabulary="text"></language></text-button>'+
                    '</button>',
        link: function(scope,elem){
            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }
    };
})

app.directive("buttonFab",function($compile) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{
            'icon':'@',
        },
        template:   '<button class="ldgfx-button-fab" ripple elevation="2" primary>'+
                        '<font-icon class="ldgfx-button-fab-icon" icon="{{ icon }}" ></font-icon>'+
                    '</button>',
        link: function(scope,elem,attrs){

            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }
    };
})

app.directive("buttonFabMore",function($compile) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{
            'options':'=',
        },
        template:   '<div class="ldgfx-button-fab-icon-more-container">'+
                        '<div ng-click="option.action();toggleFab()"  class="ldgfx-button-fab-icon-more-option" ng-style="setPosition($index)" ng-repeat="option in options" ng-show="displayMore" elevation="2">'+
                            '<font-icon class="ldgfx-button-fab-icon" icon="{{ option.icon }}" ></font-icon>'+
                            '<div class="ldgfx-button-fab-icon-more-tooltip" elevation="1">'+
                                '<language vocabulary="option.description"></language>'+
                            '</div>'+
                        '</div>'+
                        '<button-fab icon="add" ng-click="toggleFab()"></button-fab>'+
                    '</div>',
        controller: function($scope,$element){

            $scope.displayMore = false;

            $scope.toggleFab = function(){
                $scope.displayMore = !$scope.displayMore;
                $($element).children('.ldgfx-button-fab')
                           .children('.ldgfx-button-fab-icon')
                           .children()
                           .css({ transform:'rotate(' + ($scope.displayMore && '45deg' || '0deg') })
            }

            $scope.setPosition = function(iteration){
                return {
                    'margin-bottom': (iteration * 55) + 70 + 'px',
                    'animation-delay': (iteration * 0.02) + 's'
                };
            }

        },
        link: function(scope,elem,attrs){

            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })

        }
    };
})