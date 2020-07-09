app.controller('onboardingCtrl', function ($scope,$timeout,Backdrop,Onboarding) {

    let panes = $scope.panes = [];
    var activePane = 0;

    $scope.onboarding = Onboarding;
    $scope.onboarding.displayed = true;

    $scope.$watch('onboarding.displayed',function(displayed){
        if(displayed){
            Backdrop.setCloseAction(null);
            Backdrop.display();
        }else{
            Backdrop.hide();
        }
    })

    $scope.displayPrev = function(){
        if(activePane > 0){
            activePane--;
            panes.forEach(function(pane,index) {
                pane.displayed = false;
                pane.reverse = false;
            });
            panes[activePane].displayed = true;
        }
    }

    $scope.displayNext = function(){
        if(activePane < panes.length -1){
            activePane++;
            panes.forEach(function(pane,index) {
                pane.displayed = false;
                pane.reverse = true;
            });
            panes[activePane].displayed = true
        }else{
            $scope.onboarding.displayed = false;
        }
    }

    this.addPane = function(pane) {
        panes.push(pane);
        if(panes.length === 1)  panes[0].displayed = true;
    }

});