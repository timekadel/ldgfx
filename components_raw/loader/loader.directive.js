




/**
 * Progress visualization
 * Put into inputs as some of the progress might rely
 * on a certain data input (eg. file upload)
 * TODO: move in a separate folder for ldgfx lib
 */

app.directive("loader",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="loader">'+
                        '<svg class="circular" viewBox="25 25 50 50">'+
                        '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>'+
                        '</svg>'+
                    '</div>'
    };
})

app.directive("progressIndeterminate",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div ng-hide="ready" class="ldgfx-loader-indeterminate" primary="100">'+
                        '<div class="ldgfx-loader-indeterminate-progress" primary="600"></div>'+
                    '</div>'
    };
})

