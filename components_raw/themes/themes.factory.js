app.factory('ThemeFactory', function($rootScope, ViewManager) {

  this.primary = 'red';
  this.secondary = 'brightred';
  this.previous = null;

  this.setTheme = function(theme){
        this.previous = this.primary;
        this.primary = theme;
        $rootScope.$broadcast('theme-updated');
  }

  return this;

});