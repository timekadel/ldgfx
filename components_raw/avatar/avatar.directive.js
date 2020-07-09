app.directive("avatar",function($compile,$timeout,Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            url:'@',
            fname:'@',
            lname:'@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar">'+
                        '<text ng-show="displayDefaultAvatar" type="sbold" size="lg" color="accent" class="ldgfx-avatar-default-text">'+
                            '{{ ( fname | limitTo : 1 | uppercase ) + ( lname | limitTo : 1 | uppercase  ) }}'+
                        '</text>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){


            let colours = [
                "#1abc9c", "#2ecc71",  
                "#3498db", "#9b59b6", 
                "#34495e", "#16a085", 
                "#27ae60", "#2980b9", 
                "#8e44ad", "#2c3e50", 
                "#f1c40f", "#e67e22", 
                "#e74c3c", "#f39c12", 
                "#95a5a6", "#f39c12", 
                "#d35400", "#c0392b", 
                "#bdc3c7", "#7f8c8d"
            ];


            elem.addClass(  size = ({                                        
                'xsmall': 'ldgfx-avatar-xsmall',
                'small': 'ldgfx-avatar-small',                    
                'medium': 'ldgfx-avatar-medium',                    
                'large': 'ldgfx-avatar-large',                        
                'xlarge': 'ldgfx-avatar-xlarge',             
            })[ attrs.size ] || 'ldgfx-avatar-xsmall');

            elem.addClass( shape = ({                                 
                'square': 'ldgfx-avatar-square',
                'circle': 'ldgfx-avatar-circle'
            })[ attrs.shape ] || '');

            attrs.$observe('fname', function(){
                scope.fname = attrs.fname;
            });

            attrs.$observe('lname', function(){
                if(attrs.url === 'https://media.eleksen.com/img/users/profile/default.png' || !attrs.url){

                    let concat = 0;

                    for (var i = 0, len = scope.lname.length; i < len; i++) {
                        concat += attrs.lname.charCodeAt(i);
                    }

                    let colourIndex = (concat%20)

                    elem.css({'background-color': colours[colourIndex]});
                    elem.css({ 'background-image':'' });

                    scope.displayDefaultAvatar = true;

                }else{

                    scope.lname = attrs.lname;
                    elem.css({ 'background-image':'url(' + attrs.url + ')' });
                    scope.displayDefaultAvatar = false;

                }
            })

            attrs.$observe('url', function(){

                if(attrs.url === 'https://media.eleksen.com/img/users/profile/default.png' || !attrs.url){

                    let concat = 0;

                    for (var i = 0, len = scope.lname.length; i < len; i++) {
                        concat += attrs.lname.charCodeAt(i);
                    }

                    let colourIndex = (concat%20)

                    elem.css({'background-color': colours[colourIndex]});
                    elem.css({ 'background-image':'' });

                    scope.displayDefaultAvatar = true;

                }else{

                    elem.css({ 'background-image':'url(' + attrs.url + ')' });
                    scope.displayDefaultAvatar = false;

                }
            })

        }
    };
})

app.directive("avatarDefault",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            'halign': '@',
            'size': '@',
            'shape': '@',
            'fname': '@',
            'lname': '@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar-default">'+
                        '<text type="sbold" size="lg" color="accent" class="ldgfx-avatar-default-text">'+
                            '{{ ( fname | limitTo : 1 | uppercase ) + ( lname | limitTo : 1 | uppercase  ) }}'+
                        '</text>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){

                let concat = 0;
                let colours = [
                    "#1abc9c", "#2ecc71", 
                    "#3498db", "#9b59b6", 
                    "#34495e", "#16a085", 
                    "#27ae60", "#2980b9", 
                    "#8e44ad", "#2c3e50", 
                    "#f1c40f", "#e67e22", 
                    "#e74c3c", "#f39c12", 
                    "#95a5a6", "#f39c12", 
                    "#d35400", "#c0392b", 
                    "#bdc3c7", "#7f8c8d"
                ];

                for (var i = 0, len = scope.lname.length; i < len; i++) {
                    concat += scope.lname.charCodeAt(i);
                }

                var colourIndex = (concat%20)

                elem.addClass(  size = ({                                        
                    'xsmall': 'ldgfx-avatar-xsmall',
                    'small': 'ldgfx-avatar-small',                    
                    'medium': 'ldgfx-avatar-medium',                    
                    'large': 'ldgfx-avatar-large',                        
                    'xlarge': 'ldgfx-avatar-xlarge',             
                })[ scope.size ] || 'ldgfx-avatar-xsmall');

                elem.addClass( shape = ({                                 
                    'square': 'ldgfx-avatar-square',
                    'circle': 'ldgfx-avatar-circle'
                })[ scope.shape ] || '');

                attrs.$observe('url',function(){
                    elem.css({'background-color': colours[colourIndex]})
                })

                elem.css({'background-color': colours[colourIndex]})

            } 

    };
})

app.directive("avatarCustom",function($compile,$timeout,Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            uploadable:'@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar">'+
                        '<div style="width:100%;height:100%" class="ldgfx-avatar-upload-overlay" ng-transclude>'+
                        '</div>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){

            elem.addClass(  size = ({                                        
                'xsmall': 'ldgfx-avatar-xsmall',
                'small': 'ldgfx-avatar-small',                    
                'medium': 'ldgfx-avatar-medium',        
                'large': 'ldgfx-avatar-large',                        
                'xlarge': 'ldgfx-avatar-xlarge',             
            })[ attrs.size ] || 'ldgfx-avatar-xsmall');

            elem.addClass( shape = ({                                 
                'square': 'ldgfx-avatar-square',
                'circle': 'ldgfx-avatar-circle'
            })[ attrs.shape ] || '');


            attrs.$observe('url', function(){
                elem.css({ 'background-image':'url(' + attrs.url + ')' });
            })

            elem.css({ 'background-image':'url(' + attrs.url + ')' });

        }
    };
})
