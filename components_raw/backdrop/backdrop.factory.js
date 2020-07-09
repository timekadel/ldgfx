app.factory('Backdrop',function($rootScope){

    this.setCloseAction = function(action){
        this.executeOnClose = action;
    }

    this.display = function(){
        $rootScope.$broadcast('backdrop-display',this);
    }

    this.hide = function(){
        $rootScope.$broadcast('backdrop-hide');
    }

    return this;

});