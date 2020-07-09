

app.directive("checkboxInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<label>'+
                        '<input class="partials-input-checkbox" type="checkbox">'+
                        '<span class="partials-input-checkbox-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-checkbox-uncheck">check_box_outline_blank</i>'+
                            '<i class="material-icons partials-input-checkbox-checked">check_box</i>'+
                        '</span>'+
                    '</label>'
    };
})


app.directive("radioInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<label>'+
                        '<input class="partials-input-radio" type="radio">'+
                        '<span class="partials-input-radio-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-radio-uncheck">radio_button_unchecked</i>'+
                            '<i class="material-icons partials-input-radio-checked">radio_button_checked</i>'+
                        '</span>'+
                    '</label>'
    };
})

app.directive("toggleInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            iconon:'@',
            iconoff:'@'
        },
        template:   '<label>'+
                        '<input class="partials-input-checkbox" type="checkbox">'+
                        '<span class="partials-input-checkbox-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-checkbox-uncheck">{{ iconoff }}</i>'+
                            '<i class="material-icons partials-input-checkbox-checked" ink="500">{{ iconon }}</i>'+
                        '</span>'+
                    '</label>'
    };
})

app.directive("inputText",function($compile,Toast) {
    return {
        restrict: 'AE',
        transclude: true,
        replace: false,
        scope:{
            parameter:'@',
            execute:'&',
            errorModal:'=',
            rules:'='
        },
        template:   '<div class="ldgfx-input-text" ng-form="myform">'+
                        '<fluid-container direction="row">'+
                            '<input class="ldgfx-inputelement-text" name="name" type="text" ng-model="model.name" ng-disabled="!edit" primary="A700" fill>'+
                            '<font-icon class="ldgfx-input-text-icon" icon="edit" ng-show="!edit && !loader" clickable="true" ng-click="showInput()"></font-icon>'+
                            '<font-icon class="ldgfx-input-text-icon" icon="check" ng-show="edit && !loader" clickable="true" ng-click="runQuery()"></font-icon>'+
                            '<loader ng-show="loader"></loader>'+
                        '</fluid-container>'+
                        '<div ng-messages="myform.name.$error">'+
                            '<div ng-transclude></div>'+
                        '</div>'+
                    '</div>',
        link: function(scope, element, attrs){

            let input = $(element).find('.ldgfx-inputelement-text')

            scope.rules.forEach(function(rule){
                $(input).attr(rule,'');
            })

            $compile($(input))(scope);

        },
        controller: function($scope,$timeout,Modal){

            $scope.edit     = false;
            $scope.loader   = false;
            $scope.model    = {name: $scope.parameter}
    
            $scope.$watch('parameter',function(newParameter){
                $scope.model.name = newParameter;
            })

            $scope.showInput = function(){
                $scope.edit = true;
            }

            $scope.runQuery = function($event){

                if($scope.myform.$valid){

                    $scope.loader = true;
                    $scope.edit = false;

                    $scope.execute()($scope.model.name)
                    .then(function(success){
                        $timeout(function(){
                            $scope.loader = false;
                        },250)
                    }).catch(function(err){
                        $timeout(function(){
                            console.log(err);
                            $scope.loader = false;
                        },250)
                    })

                }else{
                    Modal.setContent($scope.errorModal)
                    Modal.display();
                }

            }

        } 
    };
})


app.directive("inputRangeTicks",function() {
    return {
        restrict: 'E',  
        transclude: true,
        replace: true,
        scope:{
            ticks: '=' 
        },
        template:  '<div class="ldgfx-input-range">'+
                        '<input class="ldgfx-input-range-slider" type="range" min="0" max="{{ ticks.length }}" step="1">'+
                        '<fluid-container direction="row" class="ldgfx-input-range-ticks" >'+
                            '<div style="margin-top:-38px;" class="ldgfx-input-range-tick" ng-repeat="tick in ticks" fill>'+
                                '<div ng-if="$even" style="width:1px;border-left:1px solid #929fa6; height:5px" class="ldgfx-input-range-tick-separator-small"></div>'+
                                '<div ng-if="$odd" style="width:1px;border-left:1px solid #929fa6; height:8px" class="ldgfx-input-range-tick-separator-big"></div>'+
                                '<p ng-if="$odd"  style="margin-top:0px;" class="ldgfx-input-range-tick-text" >{{ tick }}</p>'+
                            '</div>'+
                        '</fluid-container>'+
                    '</div>'
    };
})


app.directive("inputRange",function() {
    return {
        restrict: 'E',  
        transclude: true,
        replace: true,
        scope:{ 
            ngModel: '=ngModel',
            min: '=',
            max: '=',
            title: '@' 
        },
        template:  '<div class="ldgfx-input-range">'+
                        '<fluid-container direction="row">'+
                            '<p autoalign style="margin-right:16px;"> {{title}} </p>'+
                            '<input fill autoalign class="ldgfx-input-range-slider" ng-change="submit(ngModel)" ng-model="ngModel" type="range" min="{{ min }}" max="{{ max }}">'+
                            '<p autoalign style="margin-left:16px;"> {{ngModel}} </p>'+
                        '</fluid-container>'+
                    '</div>',
        controller: function($scope){
            $scope.submit = function(val){
                $scope.ngModel = val;
            }
        }
    };
})


/**
 * Directives destinated to set focus on an input
 * once it is shown on the user's screen 
 * TODO: SOLVE inputting weird problem
 */

app.directive('setFocus',function($timeout) {
    return {
        restrict : 'AE',
        link : function($scope,$element,$attr) {
            $scope.$watch($attr.setFocus,function(value) {
                $timeout(function() {
                    value ? $element[0].focus() : $element[0].blur();
                });
            });
        }
    }
})



/**
 * Directives destinated for ng-messages 
 * in order to conditionnaly display error 
 * messages under inputs  
 */

app.directive("charonly", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.charonly = function(modelValue) {  
                return (!(/[^A-zÀ-ÿ\ \-]/.test( modelValue )));
            }
        }
    };
});

app.directive("hasaspace", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.hasaspace = function(modelValue) {
                return ((/^([A-zÀ-ÿ]+[\s]+[A-zÀ-ÿ]*)*$/.test( modelValue )));
            }
        }
    };
});

app.directive("isaname", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaname = function(modelValue) {
                return ((/^([A-zÀ-ÿ]+[\s]+[A-zÀ-ÿ]*)$/.test( modelValue )));
            }
        }
    };
});

app.directive("isaniceid", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaniceid = function(modelValue) {
                return ((/^[A-Z]{2}[0-9]{2}[A-Z]{1}[0-9]{3}S*$/.test( modelValue )));
            }
        }
    };
});


app.directive("isadevid", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaniceid = function(modelValue) {
                return ((/^[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}S*$/.test( modelValue )));
            }
        }
    };
});;
