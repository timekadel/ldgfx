app.controller('stepperCtrl', function($scope){

    let steps = $scope.steps = [];

    $scope.display = function(step){
        angular.forEach(steps,function(step) {
            step.displayed = false;
        });
        step.displayed = true
    }

    this.addTab = function(step) {
        if(steps.length === 0) $scope.display(step);
        steps.push(step);
    }
})