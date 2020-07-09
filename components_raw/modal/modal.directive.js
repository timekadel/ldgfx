app.directive('modal',function(Modal, Backdrop, Company) {
    return {
        restrict: 'E',
        replace: false,
        scope:false,
        template:   '<card elevation="5" ng-show="displayed" class="ldgfx-modal">'+
                        '<fluid-container class="ldgfx-modal-container" direction="column">'+
                            '<fluid-container direction="column" class="ldgfx-modal-text-container">'+
                                '<h2><language vocabulary="modal.title"></language></h2>'+
                                '<p class="ldgfx-modal-content"><language vocabulary="modal.content"></language></p>'+
                                '<div class="ldgfx-modal-content-html"></div>'+
                            '</fluid-container>'+
                            '<fluid-container class="ldgfx-modal-button-container" direction="row">'+
                                '<fill></fill>'+
                                '<button-flat ng-if="modal.cancel" text="modal.cancel" ng-click="closeModal()"></button-flat>'+
                                '<button-flat ink="A400" text="modal.validate" ng-click="modal.executeOnValidation();closeModal()"></button-flat>'+
                            '</fluid-container>'+
                        '</fluid-container>'+
                    '</card>',
        controller:function($scope, $rootScope, $timeout, $compile){
            
            $scope.modal        = Modal;
            $scope.displayed    = false;

            $scope.$watch('modal.html', function(html) {
                $(".ldgfx-modal-content-html").html(html);
            });

            Backdrop.hide();  

            $scope.$on("modal-display",function(event, modal){
                $timeout(function(){
                    Backdrop.setCloseAction(null);
                    Backdrop.display();
                    $scope.displayed = true;
                })
            })
            

            $scope.closeModal = function(){
                setTimeout(function(){           
                    $scope.$apply(function(){
                        $scope.displayed = false;
                    })
                },200)
            }

        }
    };
})
