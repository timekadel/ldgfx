app.directive("elevation",function() {
    return {
        restrict: 'AE',
        scope:false,
        css: 'partials/elevation/elevation.style.css',
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '1': 'ldgfx-elevation-1',
                '2': 'ldgfx-elevation-2',
                '3': 'ldgfx-elevation-3',
                '4': 'ldgfx-elevation-4',
                '5': 'ldgfx-elevation-5',
            })[ attrs.elevation ] || 'ldgfx-elevation-1' );

        }
    };
})
