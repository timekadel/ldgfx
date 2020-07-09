app.directive("shadow",function() {
    return {
        restrict: 'AE',
        scope:false,
        css:'partials/shadow/shadow.style.css',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-shadow');
        }
    };
})

app.directive("shadowBig",function() {
    return {
        restrict: 'AE',
        scope:false,
        css:'partials/shadow/shadow.style.css',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-shadow-big');
        }
    };
})
