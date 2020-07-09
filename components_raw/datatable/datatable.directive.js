
app.directive("perfectList",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-perfectlist" ng-transclude></div>',
        link: function(scope,elem,attrs){
            if(attrs.expandable) {
                elem.addClass('ldgfx-perfectlist-expandable');
            }
        }
    };
})

app.directive("perfectListItem",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-perfectlist-item" ripple ng-transclude></div>',
        link: function(scope,elem,attrs){

            if ($(elem).children().hasClass('ldgfx-avatar') || $(elem).children().hasClass('ldgfx-avatar-default')){
                elem.addClass("ldgfx-perfectlist-item-big");
            }else {
                elem.addClass("ldgfx-perfectlist-item-small");
            }

            elem.bind('click', function(){
                $('.ldgfx-perfectlist-item').removeClass('ldgfx-perfectlist-item-active');
                elem.addClass('ldgfx-perfectlist-item-active');
            })

        }
                
    };
})