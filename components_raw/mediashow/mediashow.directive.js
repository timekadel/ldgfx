app.directive("mediaShow",function($parse) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs){

            elem.addClass( ({                                 
                'small':  'ldgfx-mediashow-small',
                'medium': 'ldgfx-mediashow-medium',
                'large':  'ldgfx-mediashow-large',
                'xlarge': 'ldgfx-mediashow-xlarge',
            })[attrs.mediaShow] || '');

        }
    };
})