app.factory('Modal',function($rootScope){


    this.title      = [];
    this.content    = [];
    this.html       = null;
    this.validate   = [];
    this.cancel     = [];

    this.executeOnValidation = function(){ console.log("callback not set") };

    this.setContent = function(data){
        this.title      = data.title;
        this.content    = data.content;
        this.validate   = data.validate;
        this.cancel     = data.cancel;
        if(!data.html) this.html = null;    //No time to think about it... please compile element before sending
    }

    this.display = function(data){
        $rootScope.$broadcast('modal-display');
    }

    this.setValidationAction = function(action){
        this.executeOnValidation = action
    }

    return this;

});