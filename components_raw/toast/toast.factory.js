app.factory('Toast',function($rootScope){

    this.message    = [];
    this.button     = [];
    this.type       = 'error';

    this.execute    = function(){ console.log("callback not set") };

    this.setContent = function(data){
        this.message    = data.message;
        this.button     = data.button;
        this.type       = data.type;
    }

    this.display = function(data){
        $rootScope.$broadcast('toast-display');
    }

    this.setValidationAction = function(action){
        this.execute = action;
    }

    return this;

});