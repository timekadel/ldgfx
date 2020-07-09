 app.directive("ripple",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs, ctrl){

            var timeoutRipple;
 
            elem.bind('click', function(e){             //Binding click on element

                clearTimeout(timeoutRipple);

                let target = $(elem);                   //Instanciating target to be used with JQuery
                $('.partials-ripple').remove();         //Removing any ripple container that was here before (might happen in case of click bashing)
                
                div = $('<div/>');                      //Preparing appended child
                div.addClass('partials-ripple');        //Preparing child's class
                div = $compile('<div class="partials-ripple" primary="A100"></div>')(scope);

                target.prepend(div);

                let btnOffset = $(elem).offset(),       //Calculating offset
                    xPos = e.pageX - btnOffset.left,    //Calculating ripple position
                    yPos = e.pageY - btnOffset.top,     //Calculatingf ripple position
                    rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight); //Calculating ripple radius based on container's shape

               $(div).css({                             //Positionnning ripple on target
                    top: yPos - ((rippleMaxSize)/2),    //Setting top position
                    left: xPos - (rippleMaxSize/2),     //Setting left position
                    height: rippleMaxSize,              //Setting dimensions to fit target
                    width: rippleMaxSize,               //Setting dimensions to fit target
                    transform: "scale(0,0)"             //Setting scale to "0"
                });

                timeoutRipple = setTimeout(function(){ 
                    $('.partials-ripple').remove(); 
                }, 400);

            });
        }
    }
 });

  app.directive("rippleFixed",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs){

            var timeoutRipple;
 
            elem.bind('click', function(e){             //Binding click on element

                clearTimeout(timeoutRipple);

                let target = $(elem);                   //Instanciating target to be used with JQuery
                $('.partials-ripple-fixed').remove();   //Removing any ripple container that was here before (might happen in case of click bashing)
                
                div = $compile('<div class="partials-ripple-fixed" primary="A100"></div>')(scope);

                let btnOffset = $(elem).offset(),   //Calculating offset
                    rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight);   //Calculating ripple radius based on container's shape

               $(div).css({                     //Positionnning ripple on target
                    height: rippleMaxSize,      //Setting dimensions to fit target
                    width: rippleMaxSize,       //Setting dimensions to fit target
                    transform: "translate(-50%,-50%) scale(0,0)"  //Setting scale to "0"
                }); 

                target.prepend(div);

                timeoutRipple = setTimeout(function(){ 
                    $('.partials-ripple-fixed').remove(); 
                }, 400);

            });
        }
    }
 });

   app.directive("rippleConstant",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs){

            let target = $(elem);                   //Instanciating target to be used with JQuery

            div = $compile('<div class="partials-ripple-constant" primary="A100"></div>')(scope);

            let btnOffset = $(elem).offset(),   //Calculating offset
                rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight);   //Calculating ripple radius based on container's shape

            $(div).css({                     //Positionnning ripple on target
                height: rippleMaxSize,      //Setting dimensions to fit target
                width: rippleMaxSize,       //Setting dimensions to fit target
                transform: "translate(-50%,-50%) scale(0,0)"  //Setting scale to "0"
            }); 

            target.prepend(div);

        }
    }
 });