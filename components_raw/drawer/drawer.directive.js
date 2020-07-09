app.directive("appDrawer", function($timeout) {
    return {
        templateUrl: 'partials/drawer/drawer.view.html',
        css: 'partials/drawer/drawer.style.css',
        link: function(scope, element) {

            /**
             * timeout variable used in order to wait for en event trigger on a sidebar mouse hover
             * @var waitForTimeout
             */
            var waitForTimeout;

            /**
             * Setting up event handler for mouse enter
             * Timeout is implemented in order to smooth the animation enter
             */
            element.on('mouseenter', function(){
               waitForTimeout = $timeout(openDrawer,100); 
            });

            /**
             * Setting up event handler for mouse leave
             */
            element.on('mouseleave', function(){
                closeDrawer();
            });


            /**
             * Opens the drawer using jQuery & jQueryUi
             * @function openDrawer
             */
            function openDrawer(){
                scope.$apply(function() {
                    jQuery('.top-nav-bar-logo-small').hide();
                    jQuery('.top-nav-bar-logo').stop( true, true ).fadeIn("fast");	
                    jQuery('.widget-description').stop( true, true ).fadeIn("slow");
                    jQuery(".left-nav-bar").animate({
                        width: "250px"
                    }, 250, 'easeInOutCubic');
                    jQuery(".head-logo").animate({
                        width: "250px"
                    }, 250, 'easeInOutCubic');
                })
            }

            /**
             * Closes the drawer using jQuery & jQueryUi
             * @function openDrawer
             */
            function closeDrawer(){
                $timeout.cancel(waitForTimeout);
                scope.$apply(function() {
                    jQuery('.top-nav-bar-logo').stop( true, true ).fadeOut("fast");	
                    jQuery('.top-nav-bar-logo-small').stop( true, true ).fadeIn("fast");
                    jQuery('.widget-description').stop( true, true ).fadeOut("fast");
                    jQuery(".left-nav-bar").stop( true, true ).animate({
                        width: "55px"
                    }, 250, 'easeInOutCubic');
                    jQuery(".head-logo").stop( true, true ).animate({
                        width: "55px"
                    }, 250, 'easeInOutCubic');
                });
            }

        }
    }
}) 
