app.directive("toolBar",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-toolbar" ng-transclude></div>',
        css: '/partials/flatheader/header.style.css',
    };
})

app.directive("toolBarBig",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-toolbar-big" ng-transclude></div>',
    };
})