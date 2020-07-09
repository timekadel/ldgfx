
app.directive("mobileShadow",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-mobile-shadow')
        }
    };
});

app.directive("mobileHidden",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-mobile-hidden')
        }
    };
});

app.directive("desktopHidden",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-desktop-hidden')
        }
    };
});