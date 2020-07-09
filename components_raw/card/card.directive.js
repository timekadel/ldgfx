
app.directive("card",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: false,
        template: '<div class="partials-card-container" ng-transclude></div>',
    };
})