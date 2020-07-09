app.directive("scrollbar",function($compile) {
    return {
        restrict: 'AE',
        link: function(scope, elem, attrs){
            
            /**
             * Attaching scrollbar to element 
             */
            $(elem).mCustomScrollbar({
                theme: "dark-thin",
                axis: "y",
                documentTouchScroll: true
            });

            /**
             * setting
             */
            $('.mCSB_container').css({
                'margin-right': '0px'
            })

            $('.mCSB_draggerContainer').css({
                'top': '10px',
                'bottom':'10px'
            })
        }
    };
})