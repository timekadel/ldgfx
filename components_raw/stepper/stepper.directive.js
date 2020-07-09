app.directive("stepper",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'stepperEnd':  '&',
            'form': '='
        },
        template:   '<div class="ldgfx-stepper-container">'+
                        '<fluid-container style="height: 100%;" direction="column" autoalign >'+
                            '<div style="height: calc(100% - 56px);" ng-transclude></div>'+
                            '<tool-bar class="ldgfx-stepper-footer" primary>'+
                                '<fluid-container direction="row" fill>'+
                                    '<button-flat ng-click="displayPrev()" autoalign text="buttonText.prev"></button-flat>'+
                                    '<fill></fill>'+
                                    '<div autoalign class="ldgfx-stepper-container-control-bottom">'+
                                        '<div autoalign class="ldfx-stepper-dot" ng-class="{\'active\': step.displayed}" ng-repeat="step in steps">&#9679</div>'+
                                    '</div>'+
                                    '<fill></fill>'+
                                    '<button-flat ng-click="displayNext()" autoalign text="buttonText.next"></button-flat>'+
                                '</fluid-container>'+
                            '</tool-bar>'+
                        '</fluid-container>'+
                    '</div>',
        controller: function( $scope, Modal){

            /**
             * Initializing controller & scope variables 
             */
            let steps = $scope.steps = [];
            $scope.activeStep = 0;

            $scope.buttonText = {
                "prev":[
                    {"lang":"en","text":"prev"},
                    {"lang":"fr","text":"prec"}
                ],
                "next":[
                    {"lang":"en","text":"next"},
                    {"lang":"fr","text":"suiv"}
                ],
                "done":[
                    {"lang":"en","text":"done"},
                    {"lang":"fr","text":"terminer"}
                ]
            },

            /**
             * Displays the previous step  in the array
             * by decrementing the activeStep counter
             */
            $scope.displayPrev = function(){
                if($scope.activeStep > 0){
                    $scope.activeStep--;
                    steps.forEach(function(step,index) {
                        step.displayed = false;
                        step.reverse = false;
                    });
                    steps[$scope.activeStep].displayed = true;
                }
            }

            /**
             * Displays the next step  in the array
             * by incrementing the activeStep couter
             */
            $scope.displayNext = function(){
                if($scope.form.$valid){
                    if($scope.activeStep < steps.length -1){
                        $scope.activeStep++;
                        steps.forEach(function(step,index) {
                            step.displayed = false;
                            step.reverse = true;
                        });
                        steps[$scope.activeStep].displayed = true
                    }else{
                        $scope.stepperEnd();
                    }
                }else{
                    Modal.setContent({
                        "title":[
                            {"lang":"en","text":"Wrong Parameters"},
                            {"lang":"fr","text":"Paramètres erronés"}
                        ],
                        "content":[
                            {"lang":"en","text":"Please make sure that no error is displayed below the input"},
                            {"lang":"fr","text":"Veuillez vous assurer qu'aucune errur n'est affichée en dessous du texte saisi"}
                        ],
                        "validate":[
                            {"lang":"en","text":"ok"},
                            {"lang":"fr","text":"ok"}
                        ]
                    });
                    Modal.executeOnValidation = null;
                    Modal.display()
                }
            }

            /**
             * Adds a new step into the steps array 
             * for each step declared within the stepper directive
             */
            this.addStep = function(step) {
                steps.push(step);
                if(steps.length === 1)  steps[0].displayed = true;
            }
        },

    };
})

app.directive("lstep",function() {
    return {
        restrict: 'AE',
        require: '^stepper',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<div class="ldgfx-stepper-step-content" style="height: calc(100% - 56px);" ng-class="{left:reverse}" ng-if="displayed">'+
                        '<div class="ldgfx-stepper-step" ng-transclude></div>'+
                    '</div>',
        link: function(scope, element, attrs, stepperCtrl){
            stepperCtrl.addStep(scope);
        },
    };
})