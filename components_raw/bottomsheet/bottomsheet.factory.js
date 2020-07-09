app.factory('Bottomsheet', function($rootScope){

    this.options = [];
    this.title   = 'Undefined';

    this.display = function(options, title){
        this.options = options;
        this.title   = title;
        $rootScope.$broadcast('bottomsheet-display',this);
    }

    return this;

});