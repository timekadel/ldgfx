app.directive('backdrop',function($timeout, Backdrop) {
    return {
        restrict: 'E',
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-backdrop" ng-show="displayed" ng-click="executeOnClose()"></div>',
        controller:function($scope){

            $scope.executeOnClose   = null;
            $scope.displayed        = false;

            $scope.$on('backdrop-display',function(event, backdrop){
                $timeout(function(){
                    $scope.displayed = true;
                    $scope.executeOnClose = backdrop.executeOnClose;
                })
            })

            $scope.$on('backdrop-hide',function(){
                $timeout(function(){
                    $scope.displayed = false;
                    $scope.executeOnClose = null;
                })
            })

        }
    };
})
  