app.directive("textDisplay4",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display4');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay3",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display3');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay2",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display2');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay1",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display1');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textHeadline",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-headline');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textTitle",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-title');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textSubheading",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-subheading');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textBody2",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-body2');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textBody1",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-body1');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textCaption",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-caption');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textMenu",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-menu');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textButton",function() {
    return {
        restrict: 'AE',
        scope: {
            theme:'@'
        },
        link: function(scope,elem,attrs){
            elem.addClass('ldgfx-textual-button');
            if(scope.theme === "accent"){
                elem.addClass('ldgfx-color-text-accent');
            }else{
                elem.addClass('ldgfx-color-text-primary');
            }
        }  
    };
})

app.directive("textListL2",function() {
    return {
        restrict: 'AE',
        scope: {
            theme:'@'
        },
        link: function(scope,elem,attrs){
            elem.addClass('ldgfx-textual-body1');
            elem.addClass('ldgfx-color-text-secondary');
        }  
    };
})

app.directive("fontIcon",function($compile) {
    return {
        restrict: 'AE',
        scope: {
            icon:'@',
            clickable:'@',
            theme:'@'
        },
        template: '<i ng-attr-ripple-fixed="{{clickable}}" ng-class="{\'ldgfx-color-icon-hoverable\':clickable}" class="material-icons ldgfx-textual-fonticon ldgfx-color-icon-active">{{ icon }}</i>',
        link:function(scope, elem, attrs){
            if(scope.clickable){
                elem.bind('click',function(e){
                    e.stopPropagation();
                })
            }
        }
    };
})

app.directive("subheading",function($compile) {
    return {
        restrict: 'AE',
        scope: {
            text:'@'
        },
        template: '<div class="ldgfx-textual-subheading" ink="A400">{{ text }}</div>',
    };
})