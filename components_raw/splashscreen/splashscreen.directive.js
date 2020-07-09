app.directive("splashScreen",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-splashscreen" ng-transclude>'+
                    '</div>'
    };
})
