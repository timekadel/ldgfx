app.factory('NavBarLeft',function($rootScope){

    this.display = function(view){
        $rootScope.$broadcast('navBarLeft-display',{displayed: true, view: view})
    }

    this.hide = function(view){
        $rootScope.$broadcast('navBarLeft-hide')
    }

    return this;

});

app.factory('NavBarRight',function($rootScope){

    this.display = function(view){
        $rootScope.$broadcast('navBarRight-display',{displayed: true, view: view})
    }

    this.hide = function(view){
        $rootScope.$broadcast('navBarRight-hide')
    }

    return this;

});