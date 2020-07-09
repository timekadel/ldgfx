app.directive("fluidContainer",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        css:'partials/fluid/fluid.style.css',
        template:   '<div class="partials-fluid-container" ng-transclude></div>',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass( bgcolor = ({                                 
                'column': 'partials-fluid-container-column',
                'row': 'partials-fluid-container-row',
            })[ attrs.direction ] || 'partials-fluid-container-column' );
        }
    };
}) 

app.directive("col",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-col');
        }
    };
})

app.directive("row",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-row');
        }
    };
})

app.directive("fill",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-flex');
        }
    };
})

app.directive("autoalign",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-autoalign');
        }
    };
})



