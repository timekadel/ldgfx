app.directive("secondary",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            scope.$on('theme-updated', function(){

                elem.addClass( status = ({                                 
                    '500': 'ldgfx-color-500 '+ ThemeFactory.secondary,
                    '50':  'ldgfx-color-50  '+ ThemeFactory.secondary,
                    '100': 'ldgfx-color-100 '+ ThemeFactory.secondary,
                    '200': 'ldgfx-color-200 '+ ThemeFactory.secondary,
                    '300': 'ldgfx-color-300 '+ ThemeFactory.secondary,
                    '400': 'ldgfx-color-400  '+ ThemeFactory.secondary,
                    '500': 'ldgfx-color-500 '+ ThemeFactory.secondary,
                    '600': 'ldgfx-color-600 '+ ThemeFactory.secondary,
                    '700': 'ldgfx-color-700 '+ ThemeFactory.secondary,
                    '800': 'ldgfx-color-800  '+ ThemeFactory.secondary,
                    '900': 'ldgfx-color-900 '+ ThemeFactory.secondary,
                    'A100': 'ldgfx-color-A100 '+ ThemeFactory.secondary,
                    'A200': 'ldgfx-color-A200 '+ ThemeFactory.secondary,
                    'A400': 'ldgfx-color-A400 '+ ThemeFactory.secondary,
                    'A700': 'ldgfx-color-A700 '+ ThemeFactory.secondary,
                })[attrs.secondary] || 'ldgfx-color-500 '+ ThemeFactory.secondary );

            });

        }
    };
}]);

app.directive("primary",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '500': 'ldgfx-color-500 ',
                '50':  'ldgfx-color-50  ',
                '100': 'ldgfx-color-100 ',
                '200': 'ldgfx-color-200 ',
                '300': 'ldgfx-color-300 ',
                '400': 'ldgfx-color-400 ',
                '500': 'ldgfx-color-500 ',
                '600': 'ldgfx-color-600 ',
                '700': 'ldgfx-color-700 ',
                '800': 'ldgfx-color-800 ',
                '900': 'ldgfx-color-900 ',
                'A100': 'ldgfx-color-A100 ',
                'A200': 'ldgfx-color-A200 ',
                'A400': 'ldgfx-color-A400 ',
                'A700': 'ldgfx-color-A700 ',
            })[attrs.primary] || 'ldgfx-color-500 ' );

            elem.addClass(ThemeFactory.primary);

            scope.$on('theme-updated', function(){
                $(elem).removeClass(ThemeFactory.previous).addClass(ThemeFactory.primary);
            })

        }
    };
}]);

app.directive("ink",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '500': 'ldgfx-ink-500 ',
                '50':  'ldgfx-ink-50  ',  
                '100': 'ldgfx-ink-100 ',
                '200': 'ldgfx-ink-200 ',
                '300': 'ldgfx-ink-300 ',
                '400': 'ldgfx-ink-400 ',
                '500': 'ldgfx-ink-500 ',
                '600': 'ldgfx-ink-600 ',
                '700': 'ldgfx-ink-700 ',
                '800': 'ldgfx-ink-800 ',
                '900': 'ldgfx-ink-900 ',
                'A100': 'ldgfx-ink-A100 ',
                'A200': 'ldgfx-ink-A200 ',
                'A400': 'ldgfx-ink-A400 ',
                'A700': 'ldgfx-ink-A700 ',
            })[attrs.ink] || 'ldgfx-ink-500 ');

            elem.addClass(ThemeFactory.primary);

            scope.$on('theme-updated', function(){
                try{
                    $(elem).removeClass(ThemeFactory.previous).addClass(ThemeFactory.primary);
                }catch(err){
                    console.log(err)
                }
            })

        }
    };
}]);