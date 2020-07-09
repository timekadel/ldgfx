
app.directive('language',function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: false,
        scope:{
            vocabulary:'='
        },
        template: '<span ng-repeat="voc in vocabulary track by $index"  ng-if="voc.lang === company.lang" ng-transclude>{{voc.text}}</span>',
        controller: function($scope,Company){
            $scope.company = Company;
        }
    };
})
