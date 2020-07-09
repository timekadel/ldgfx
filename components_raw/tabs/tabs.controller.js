app.controller('tabsCtrl', function ($scope, $timeout, PageManager, Page) {

    let tabs = $scope.tabs = []; 
    var currentIndex = -1;

    $scope.backward = true;

    $scope.display = function(currentTab){

        let newIndex = tabs.indexOf(currentTab);

        if(newIndex > currentIndex){
            $scope.backward = false;
        }else{
            $scope.backward= true;
        }

        angular.forEach(tabs,function(tab) {
            tab.displayed = false;
        });

        currentTab.displayed = true;
        currentIndex = newIndex;

    }

    this.addTab = function(tab) {
        if(tabs.length === 0) $scope.display(tab);
        tabs.push(tab);
    }

});