app.directive("featureDiscoveryFab",function() {
    return {
        restrict: 'AE',
        replace: true,
        scope:{
            'vocabulary':'='
        },
        template: '<div class="ldgfx-discovery-fab" primary>'+
                        '<button-fab ripple-constant style="z-index: 20; background-color: white; transform: scale(1.6); box-shadow: none; left: calc(50% + 28px); top: calc(50% + 28px);"></button-fab>'+
                        '<div class="ldgfx-onboarding-fab-text-container">'+
                            '<h2><language vocabulary="vocabulary.title"></language></h2>'+
                            '<h5 style="white-space: normal;"><language vocabulary="vocabulary.description"></language></h5>'+
                        '</div>'+
                    '</div>',
        controller: function($scope, $timeout){
            
            $scope.$watch('vocabulary', function(newValue){
                $timeout(function(){
                    $scope.vocabulary = newValue;
                })
            })

        }
    };
})


app.directive("onboarding",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'onboardingEnd':  '&'
        },
        template:   '<div class="ldgfx-onboarding-container" elevation="2">'+
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
        controller: function( $scope, Backdrop){

            Backdrop.setCloseAction(null);
            Backdrop.display();

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
                if($scope.activeStep < steps.length -1){
                    $scope.activeStep++;
                    steps.forEach(function(step,index) {
                        step.displayed = false;
                        step.reverse = true;
                    });
                    steps[$scope.activeStep].displayed = true
                }else{
                    $scope.onboardingEnd();
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

app.directive("onboardingPanne",function() {
    return {
        restrict: 'AE',
        require: '^onboarding',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<div class="ldgfx-stepper-step-content" style="height: calc(100% - 56px);" ng-class="{left:reverse}" ng-show="displayed">'+
                        '<div class="ldgfx-stepper-step" style="height:100%" ng-transclude></div>'+
                    '</div>',
        link: function(scope, element, attrs, onboardingCtrl){
            onboardingCtrl.addStep(scope);
        },
    };
})