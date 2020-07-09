app.directive("toast",function(Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<div class="ldgfx-toast" ng-show="displayed" elevation="1" ng-transclude>'+
                        '<fluid-container direction="row" style="height:100%">'+
                            '<div autoalign style="color: #FFFFFF" class="ldgfx-textual-body1">'+
                                '<language vocabulary="toast.message"></language>'+
                            '</div>'+
                            '<fill></fill>'+
                            '<button-flat ng-style="{\'color\': buttonColor}" ng-click="toast.execute();hideToast()" ripple-fixed text="toast.button" autoalign></button-flat>'+
                        '</div>'+
                    '</div>',
        controller: function($scope,$timeout){

            $scope.toast        = Toast;
            $scope.displayed    = false;

            var toastTimeout;



            $scope.$watch('toast.type',function(type){
                $scope.buttonColor = ({
                    'success': '#8bc34a',
                    'warning': '#ffc107', 
                    'error':   '#f44336'
                })[ type ] || '#f44336' ;
            })               


            $scope.$on("toast-display",function(){
                $timeout(function(){
                    $scope.displayed = true;
                    clearTimeout(toastTimeout);                 //Clearing timeout if needed
                    toastTimeout = setTimeout(function(){       //Launching hide timeout
                        $scope.$apply(function(){               //Applying hide
                            $scope.displayed = false;     //Hiding toast
                        })
                    },3000)
                })
            })


            /**
             * @function hideToast
             * Sets the toast parameter "displayed" to false in order to hide the Toast
             */
            $scope.hideToast = function(){
                $scope.toast.displayed = false;     //Updating toast display status
            }

        }
    };
})