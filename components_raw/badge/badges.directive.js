app.directive('badge', function () {
    return {
        restrict: 'E',
        scope:{
            value: '=',
            color: '='
        },
        template:   '<div ng-style="{\'background\': color}" style="width:20px;height:20px;border-radius:50%;border:none">'+
                        '<div autoalign class="ldgfx-textual-list-subheading" style="color: white; text-align: center; font-size: 11px;">'+
                            '{{ value }}'+
                        '</div>'+
                    '</div>',
        controller: function($scope){

            $scope.$watch('value',function(){
                //WATCHING VALUE
            })

        }
    }
})