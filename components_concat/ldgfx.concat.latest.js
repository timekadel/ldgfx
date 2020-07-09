app.directive("avatar",function($compile,$timeout,Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            url:'@',
            fname:'@',
            lname:'@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar">'+
                        '<text ng-show="displayDefaultAvatar" type="sbold" size="lg" color="accent" class="ldgfx-avatar-default-text">'+
                            '{{ ( fname | limitTo : 1 | uppercase ) + ( lname | limitTo : 1 | uppercase  ) }}'+
                        '</text>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){


            let colours = [
                "#1abc9c", "#2ecc71",  
                "#3498db", "#9b59b6", 
                "#34495e", "#16a085", 
                "#27ae60", "#2980b9", 
                "#8e44ad", "#2c3e50", 
                "#f1c40f", "#e67e22", 
                "#e74c3c", "#f39c12", 
                "#95a5a6", "#f39c12", 
                "#d35400", "#c0392b", 
                "#bdc3c7", "#7f8c8d"
            ];


            elem.addClass(  size = ({                                        
                'xsmall': 'ldgfx-avatar-xsmall',
                'small': 'ldgfx-avatar-small',                    
                'medium': 'ldgfx-avatar-medium',                    
                'large': 'ldgfx-avatar-large',                        
                'xlarge': 'ldgfx-avatar-xlarge',             
            })[ attrs.size ] || 'ldgfx-avatar-xsmall');

            elem.addClass( shape = ({                                 
                'square': 'ldgfx-avatar-square',
                'circle': 'ldgfx-avatar-circle'
            })[ attrs.shape ] || '');

            attrs.$observe('fname', function(){
                scope.fname = attrs.fname;
            });

            attrs.$observe('lname', function(){
                if(attrs.url === 'https://media.eleksen.com/img/users/profile/default.png' || !attrs.url){

                    let concat = 0;

                    for (var i = 0, len = scope.lname.length; i < len; i++) {
                        concat += attrs.lname.charCodeAt(i);
                    }

                    let colourIndex = (concat%20)

                    elem.css({'background-color': colours[colourIndex]});
                    elem.css({ 'background-image':'' });

                    scope.displayDefaultAvatar = true;

                }else{

                    scope.lname = attrs.lname;
                    elem.css({ 'background-image':'url(' + attrs.url + ')' });
                    scope.displayDefaultAvatar = false;

                }
            })

            attrs.$observe('url', function(){

                if(attrs.url === 'https://media.eleksen.com/img/users/profile/default.png' || !attrs.url){

                    let concat = 0;

                    for (var i = 0, len = scope.lname.length; i < len; i++) {
                        concat += attrs.lname.charCodeAt(i);
                    }

                    let colourIndex = (concat%20)

                    elem.css({'background-color': colours[colourIndex]});
                    elem.css({ 'background-image':'' });

                    scope.displayDefaultAvatar = true;

                }else{

                    elem.css({ 'background-image':'url(' + attrs.url + ')' });
                    scope.displayDefaultAvatar = false;

                }
            })

        }
    };
})

app.directive("avatarDefault",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            'halign': '@',
            'size': '@',
            'shape': '@',
            'fname': '@',
            'lname': '@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar-default">'+
                        '<text type="sbold" size="lg" color="accent" class="ldgfx-avatar-default-text">'+
                            '{{ ( fname | limitTo : 1 | uppercase ) + ( lname | limitTo : 1 | uppercase  ) }}'+
                        '</text>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){

                let concat = 0;
                let colours = [
                    "#1abc9c", "#2ecc71", 
                    "#3498db", "#9b59b6", 
                    "#34495e", "#16a085", 
                    "#27ae60", "#2980b9", 
                    "#8e44ad", "#2c3e50", 
                    "#f1c40f", "#e67e22", 
                    "#e74c3c", "#f39c12", 
                    "#95a5a6", "#f39c12", 
                    "#d35400", "#c0392b", 
                    "#bdc3c7", "#7f8c8d"
                ];

                for (var i = 0, len = scope.lname.length; i < len; i++) {
                    concat += scope.lname.charCodeAt(i);
                }

                var colourIndex = (concat%20)

                elem.addClass(  size = ({                                        
                    'xsmall': 'ldgfx-avatar-xsmall',
                    'small': 'ldgfx-avatar-small',                    
                    'medium': 'ldgfx-avatar-medium',                    
                    'large': 'ldgfx-avatar-large',                        
                    'xlarge': 'ldgfx-avatar-xlarge',             
                })[ scope.size ] || 'ldgfx-avatar-xsmall');

                elem.addClass( shape = ({                                 
                    'square': 'ldgfx-avatar-square',
                    'circle': 'ldgfx-avatar-circle'
                })[ scope.shape ] || '');

                attrs.$observe('url',function(){
                    elem.css({'background-color': colours[colourIndex]})
                })

                elem.css({'background-color': colours[colourIndex]})

            } 

    };
})

app.directive("avatarCustom",function($compile,$timeout,Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            uploadable:'@'
        },
        css: 'partials/avatar/avatar.style.css',
        template:   '<div class="ldgfx-avatar">'+
                        '<div style="width:100%;height:100%" class="ldgfx-avatar-upload-overlay" ng-transclude>'+
                        '</div>'+
                    '</div>',
        link: function(scope, elem, attrs, ctrl){

            elem.addClass(  size = ({                                        
                'xsmall': 'ldgfx-avatar-xsmall',
                'small': 'ldgfx-avatar-small',                    
                'medium': 'ldgfx-avatar-medium',        
                'large': 'ldgfx-avatar-large',                        
                'xlarge': 'ldgfx-avatar-xlarge',             
            })[ attrs.size ] || 'ldgfx-avatar-xsmall');

            elem.addClass( shape = ({                                 
                'square': 'ldgfx-avatar-square',
                'circle': 'ldgfx-avatar-circle'
            })[ attrs.shape ] || '');


            attrs.$observe('url', function(){
                elem.css({ 'background-image':'url(' + attrs.url + ')' });
            })

            elem.css({ 'background-image':'url(' + attrs.url + ')' });

        }
    };
})
;app.directive('backdrop',function($timeout, Backdrop) {
    return {
        restrict: 'E',
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-backdrop" ng-show="displayed" ng-click="executeOnClose()"></div>',
        controller:function($scope){

            $scope.executeOnClose   = null;
            $scope.displayed        = false;

            $scope.$on('backdrop-display',function(event, backdrop){
                $timeout(function(){
                    $scope.displayed = true;
                    $scope.executeOnClose = backdrop.executeOnClose;
                })
            })

            $scope.$on('backdrop-hide',function(){
                $timeout(function(){
                    $scope.displayed = false;
                    $scope.executeOnClose = null;
                })
            })

        }
    };
})
  ;app.factory('Backdrop',function($rootScope){

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

});;app.directive('badge', function () {
    return {
        restrict: 'E',
        scope:{
            value: '=',
            color: '='
        },
        template:   '<div ng-style="{\'background\': color}" style="width:20px;height:20px;border-radius:50%;border:none">'+
                        '<div autoalign class="ldgfx-textual-list-subheading" style="color: white; text-align: center; font-size: 11px;">'+
                            '{{ value }}'+
                        '</div>'+
                    '</div>',
        controller: function($scope){

            $scope.$watch('value',function(){
                //WATCHING VALUE
            })

        }
    }
});
app.directive("bottomSheet", function(Bottomsheet, Backdrop) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            option:'@',
            title:'@'
        },
        template:
                '<div class="ldgfx-bottomsheet" ng-show="displayBottomsheet" elevation="1" ng-transclude>'+
                    '<div class="ldgfx-bottomsheet-header">'+
                        '<h3>{{ title }}</h3>'+
                    '</div>'+
                    '<fluid-container direction="row">'+
                        '<fluid-container ng-click="option.action();hideBottomSheet()" direction="column" ng-repeat="option in options" style="padding:16px 0;display:flex;flex:1">'+
                            '<i autoalign class="material-icons" style="color: rgba(0, 0, 0, 0.54); margin-bottom: 8px; font-size: 48px;">{{ option.icon }}</i>'+
                            '<p autoalign>{{ option.title }}</p>'+
                        '</fluid-container>'+
                    '</fuid-container>'+
                '</div>',
        controller: function($scope,$timeout){

            $scope.displayBottomsheet = false;  //Bottom sheet is closed by default
            
            $scope.hideBottomSheet = function(){
                Backdrop.hide();
                $scope.displayBottomsheet = false;      //Hiding any previous toast
            }

            $scope.$on('bottomsheet-display',function(){
                $timeout(function(){
                    Backdrop.setCloseAction($scope.hideBottomSheet);
                    Backdrop.display();
                    $scope.title = Bottomsheet.title;
                    $scope.options = Bottomsheet.options;   //Fetching message from factory
                    $scope.displayBottomsheet = true;       //Displaying toast on screen*/          
                })

            })


        }
    };
});app.factory('Bottomsheet', function($rootScope){

    this.options = [];
    this.title   = 'Undefined';

    this.display = function(options, title){
        this.options = options;
        this.title   = title;
        $rootScope.$broadcast('bottomsheet-display',this);
    }

    return this;

});;app.directive("buttonFlat",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'text':'='
        },
        template:   '<button ripple class="ldgfx-button-flat">'+
                        '<text-button autoalign><language vocabulary="text"></language></text-button>'+
                    '</button>',
        css: '/partials/button/button.style.css',
        link: function(scope,elem){
            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }

    };
})

app.directive("buttonRaised",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            'text':'=',
        },
        template:   '<button class="ldgfx-button-raised" elevation="1" ripple>'+
                        '<text-button><language vocabulary="text"></language></text-button>'+
                    '</button>',
        link: function(scope,elem){
            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }
    };
})

app.directive("buttonFab",function($compile) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{
            'icon':'@',
        },
        template:   '<button class="ldgfx-button-fab" ripple elevation="2" primary>'+
                        '<font-icon class="ldgfx-button-fab-icon" icon="{{ icon }}" ></font-icon>'+
                    '</button>',
        link: function(scope,elem,attrs){

            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })
        }
    };
})

app.directive("buttonFabMore",function($compile) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{
            'options':'=',
        },
        template:   '<div class="ldgfx-button-fab-icon-more-container">'+
                        '<div ng-click="option.action();toggleFab()"  class="ldgfx-button-fab-icon-more-option" ng-style="setPosition($index)" ng-repeat="option in options" ng-show="displayMore" elevation="2">'+
                            '<font-icon class="ldgfx-button-fab-icon" icon="{{ option.icon }}" ></font-icon>'+
                            '<div class="ldgfx-button-fab-icon-more-tooltip" elevation="1">'+
                                '<language vocabulary="option.description"></language>'+
                            '</div>'+
                        '</div>'+
                        '<button-fab icon="add" ng-click="toggleFab()"></button-fab>'+
                    '</div>',
        controller: function($scope,$element){

            $scope.displayMore = false;

            $scope.toggleFab = function(){
                $scope.displayMore = !$scope.displayMore;
                $($element).children('.ldgfx-button-fab')
                           .children('.ldgfx-button-fab-icon')
                           .children()
                           .css({ transform:'rotate(' + ($scope.displayMore && '45deg' || '0deg') })
            }

            $scope.setPosition = function(iteration){
                return {
                    'margin-bottom': (iteration * 55) + 70 + 'px',
                    'animation-delay': (iteration * 0.02) + 's'
                };
            }

        },
        link: function(scope,elem,attrs){

            elem.bind('mousedown',function(e){  //Overriding default button animation on click
                e.preventDefault();             //Preventing default animation
            })

        }
    };
});
app.directive("card",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: false,
        template: '<div class="partials-card-container" ng-transclude></div>',
    };
});app.directive("gaugeChart",function() {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope: {
            settings: "=",
            value: "=",
            legend: "=",
            active: "=",
            min:"=",
            max:"="
        },
        template: '<canvas id="canvas" height="200px" width="200px"></canvas>',
        controller: function($scope, $element, $compile, $timeout){


            /**
             * Getting pixel/ratio for different types of screens
             * in order to setup a non-blurry canvas
             */
            function getPixelRatio(){

                var ctx = angular.element($element)[0].getContext("2d");

                var dpr =   window.devicePixelRatio || 1;
                var bsr =   ctx.webkitBackingStorePixelRatio ||
                            ctx.mozBackingStorePixelRatio ||
                            ctx.msBackingStorePixelRatio ||
                            ctx.oBackingStorePixelRatio ||
                            ctx.backingStorePixelRatio || 1;

                return dpr / bsr;
            }


            /**
             * sets up an HDPI canvas using getPixelRatio
             * @param {Integer} w the width of the canvas
             * @param {Integer} h the height of the canvas
             * @return {DOMelement} the generated HDPI canvas
             */
            function setupHDPICanvas(w, h){

                var ratio = getPixelRatio()
                var canvas = angular.element($element)[0];

                canvas.width = w * ratio;
                canvas.height = h * ratio;
                canvas.style.width = w + "px";
                canvas.style.height = h + "px";
                
                canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);

                return canvas;
            }


            function MaterialGauge(element,colour, current, min, max, icon, unit, legend, active) {
            
                this.colour     = colour;
                this.current    = current;
                this.min        = min;  
                this.max        = max;
                this.icon       = icon;
                this.unit       = unit;
                this.legend     = legend.toUpperCase();
                this.active     = active;
                
                this.canvas     = setupHDPICanvas(200,200);
                this.ctx        = null;


                /**
                 * Renders a gauge in a specified canvas container
                 * Uses settings from scope parameters in order to setup
                 * color, icon, min, max and legend
                 */
                this.draw = function(){
  
                    if (this.canvas.getContext) {


                        /**
                         * Solving Scaling problem for canvas element
                         * @please see https://www.html5rocks.com/en/tutorials/canvas/hidpi/ for further explanation
                         */

                        let progressCircle = this.current == this.max ? this.current - 1 : this.current
                        let progressPercentage = (progressCircle - this.min)/(this.max - this.min);

                        this.ctx = this.canvas.getContext('2d');  //creating canvas context
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


                        /**
                        * Creation of the gauge container
                        */
                        this.ctx.beginPath();                    //Creating path for context
                        this.ctx.arc(100,75,50,0,2*Math.PI);     //Generating full arc
                        this.ctx.lineWidth = 5;                  //Setting stroke width
                        this.ctx.strokeStyle = '#D6DCD8'         //Setting stroke color
                        this.ctx.stroke();                       //Creating stroke
                        this.ctx.closePath();

                        /**
                        * Creation of the gauge progress
                        */
                        if(this.active){
                            this.ctx.beginPath();                    //Creating path for context
                            this.ctx.arc(100,75,50,-Math.PI/2,((this.active && progressPercentage) || 0)*Math.PI*2-Math.PI/2);     //Generating full arc
                            this.ctx.lineWidth = 6.5;                //Setting stroke width
                            this.ctx.lineCap = 'round';              //Rounding line's edges
                            this.ctx.strokeStyle = this.colour;      //Setting stroke color
                            this.ctx.shadowBlur = 2;                 //Rendering Shaddow around progress 
                            this.ctx.shadowOffsetX = 2;              //Setting shadow offest x
                            this.ctx.shadowOffsetY = 2;              //Setting shadow offest y
                            this.ctx.shadowColor = "#D6DCD8";        //Setting shadow color
                            this.ctx.stroke();                       //Creating stroke
                            this.ctx.closePath();                    //Closing path
                        }


                        /**
                        * Creation of icon container
                        */
                        this.ctx.beginPath();                    //Creating path for context
                        this.ctx.arc(100,75,40,0,2*Math.PI);     //Generating full arc
                        this.ctx.fillStyle = (this.active && this.colour ) || '#B0B0B0';    //Setting up colour of the icon container
                        this.ctx.fill();                         //Creating stroke
                        this.ctx.closePath();                    //Closing path


                        /**
                        * Creation of fonticon
                        */
                        this.ctx.beginPath();                    //Creating path for context
                        this.ctx.font = '48px Material Icons';   //Setting up fonticon size and link
                        this.ctx.shadowBlur = 0;                 //Rendering Shaddow around progress 
                        this.ctx.shadowOffsetX = 0;              //Setting shadow offest x
                        this.ctx.shadowOffsetY = 0;              //Setting shadow offest y
                        this.ctx.shadowColor = "#D6DCD8";        //Setting shadow color
                        this.ctx.fillStyle = 'white';            //Setting up fonticon color
                        this.ctx.textAlign = 'center';           //Aligning icon
                        this.ctx.fillText(String.fromCharCode(this.icon),101,98);   //Setting up fonticon from hexcode
                        this.ctx.closePath();                    //Closing path

                        /**
                        * Creation of text value container
                        */
                        this.ctx.beginPath();                    //Creating path for context
                        this.ctx.font = '500 18px roboto';       //Setting up font size for displayed text
                        this.ctx.shadowBlur = 0;                 //Resetting shaddow parameter to default (none)
                        this.ctx.fillStyle = '#747474';          //Setting text color (light black)
                        this.ctx.textAlign = 'center';           //Centering text
                        this.ctx.fillText((( this.active && (this.current + " " + this.unit))|| "offline"),101,154);    //Rendering text
                        this.ctx.closePath();                    //Closing path

                        /**
                        * Creation of text comment container
                        */
                        this.ctx.beginPath();                    //Creating path for context
                        this.ctx.font = '500 11px roboto';       //Setting up font size for displayed text
                        this.ctx.shadowBlur = 0;                 //Resetting shaddow parameter to default (none)
                        this.ctx.fillStyle = '#B0B0B0';          //Setting text color (light gray)
                        this.ctx.textAlign = 'center';           //Centering text
                        this.ctx.fillText(((this.active && this.legend ) || "NOTHING TO DISPLAY"),101,171);  //Rendering text
                        this.ctx.closePath();                    //Closing path
  
                    } 

                }
                
                this.setValue = function(value){

                    if(typeof value != 'undefined'){

                        if(value >= this.max){
                            this.current = this.max;
                            this.draw(); 
                        }else if(value <= this.min){
                            this.current = this.min;
                            this.draw();  
                        }else{
                            this.current = value;
                            this.draw();  
                        }

                    }else{

                        this.current = this.min;
                        this.draw(); 

                    }

                }

                this.setLegend = function(value){

                    if(typeof value != 'undefined'){
                        this.legend = value.toUpperCase();
                        this.draw();
                    }else{
                        this.legend = 'UNDEFINED';
                        this.draw();        
                    }

                }

                this.setActive = function(value){

                    if(typeof value != 'undefined'){
                        this.active = value;
                        this.draw();
                    }else{
                        this.active = true;
                        this.draw();        
                    }
                }

                this.setMin = function(value){

                    if(typeof value != 'undefined'){
                        this.min = value;
                        this.draw();
                    }else{
                        this.min = 0;
                        this.draw();        
                    }
                }

                this.setMax = function(value){
                    if(typeof value != 'undefined'){
                        this.max = max;
                        this.draw();
                    }else{
                        this.max = 100;
                        this.draw();        
                    }
                }
            
            }    

            var gauge = new MaterialGauge(              //Creation of a new gauge object
                $element,                               //Setting scope element as the target
                $scope.settings.color,                  //Setting gauge color from scope parameters
                $scope.value,                           //Setting gauge initial value from scope parameters
                $scope.min,                             //Setting gauge minimal value from scope parameters
                $scope.max,                             //Setting gauge maximal value from scope parameters
                $scope.settings.icon,                   //Setting gauge icon from scope parameters (@see google's material icon hex codes)
                $scope.settings.unit,                   //Setting gauge unit
                $scope.legend || "UNDEFINED",           //Setting gauge comment
                $scope.active                           //Setting gauge status
            );

            gauge.draw();                               //Rendering gauge into canvas element

            $scope.$watch('value',function(newValue){   //Watching gauge value as it is the only parameter which will be updated
                $timeout(function(){
                    gauge.setValue(newValue);               //Applying new value to the gauge    
                });
            })

            $scope.$watch('legend',function(newValue){   //Watching gauge value as it is the only parameter which will be updated
                $timeout(function(){
                    gauge.setLegend(newValue);               //Applying new value to the gauge
                });
            })

            $scope.$watch('active',function(newValue){   //Watching gauge value as it is the only parameter which will be updated
                $timeout(function(){
                    gauge.setActive(newValue);               //Applying new value to the gauge
                });
            })

            $scope.$watch('min',function(newValue){   //Watching gauge value as it is the only parameter which will be updated
                $timeout(function(){
                    gauge.setMin(newValue);               //Applying new value to the gauge
                });
            })

            $scope.$watch('max',function(newValue){   //Watching gauge value as it is the only parameter which will be updated
                $timeout(function(){
                    gauge.setMax(newValue);               //Applying new value to the gauge
                });
            })

        }
    };
})



app.directive("lineChart",function() {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope: {
            settings: "=",
            values: "=",
        },
        template: '<div></div>',
        link: function(scope, element, attrs){

            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);

   
            function drawBasic() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'Hour');
                data.addColumn('number', 'Dogs');
        
                data.addRows(scope.values);

                var options = {
                    chartArea: {'width': '100%','height':'100%'},
                    legend :'none',
                    axisFontSize : 0,
                    width: '100%',
                    height: '100%',
                    colors: [scope.settings.color],
                    curveType: 'function',
                    hAxis: {
                        baselineColor: '#FFFFFF',
                        gridlines: {
                            color: 'transparent'
                        }
                    },
                    vAxis: {
                        baselineColor: '#FFFFFF',
                        gridlines: {
                            color: 'transparent'
                        }
                    },
                    animation:{
                        startup: true,
                        duration: 2000,
                        easing: 'out' 
                    }
                };

                var chart = new google.visualization.LineChart(angular.element(element)[0]);

                chart.draw(data, options);


            }

        }
    };
});;
app.directive("perfectList",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-perfectlist" ng-transclude></div>',
        link: function(scope,elem,attrs){
            if(attrs.expandable) {
                elem.addClass('ldgfx-perfectlist-expandable');
            }
        }
    };
})

app.directive("perfectListItem",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-perfectlist-item" ripple ng-transclude></div>',
        link: function(scope,elem,attrs){

            if ($(elem).children().hasClass('ldgfx-avatar') || $(elem).children().hasClass('ldgfx-avatar-default')){
                elem.addClass("ldgfx-perfectlist-item-big");
            }else {
                elem.addClass("ldgfx-perfectlist-item-small");
            }

            elem.bind('click', function(){
                $('.ldgfx-perfectlist-item').removeClass('ldgfx-perfectlist-item-active');
                elem.addClass('ldgfx-perfectlist-item-active');
            })

        }
                
    };
});app.controller('drawerCtrl', function ($scope, $http, $timeout, $sce) {
    function displayPage(pageId){
        
    }
});;app.directive("appDrawer", function($timeout) {
    return {
        templateUrl: 'partials/drawer/drawer.view.html',
        css: 'partials/drawer/drawer.style.css',
        link: function(scope, element) {

            /**
             * timeout variable used in order to wait for en event trigger on a sidebar mouse hover
             * @var waitForTimeout
             */
            var waitForTimeout;

            /**
             * Setting up event handler for mouse enter
             * Timeout is implemented in order to smooth the animation enter
             */
            element.on('mouseenter', function(){
               waitForTimeout = $timeout(openDrawer,100); 
            });

            /**
             * Setting up event handler for mouse leave
             */
            element.on('mouseleave', function(){
                closeDrawer();
            });


            /**
             * Opens the drawer using jQuery & jQueryUi
             * @function openDrawer
             */
            function openDrawer(){
                scope.$apply(function() {
                    jQuery('.top-nav-bar-logo-small').hide();
                    jQuery('.top-nav-bar-logo').stop( true, true ).fadeIn("fast");	
                    jQuery('.widget-description').stop( true, true ).fadeIn("slow");
                    jQuery(".left-nav-bar").animate({
                        width: "250px"
                    }, 250, 'easeInOutCubic');
                    jQuery(".head-logo").animate({
                        width: "250px"
                    }, 250, 'easeInOutCubic');
                })
            }

            /**
             * Closes the drawer using jQuery & jQueryUi
             * @function openDrawer
             */
            function closeDrawer(){
                $timeout.cancel(waitForTimeout);
                scope.$apply(function() {
                    jQuery('.top-nav-bar-logo').stop( true, true ).fadeOut("fast");	
                    jQuery('.top-nav-bar-logo-small').stop( true, true ).fadeIn("fast");
                    jQuery('.widget-description').stop( true, true ).fadeOut("fast");
                    jQuery(".left-nav-bar").stop( true, true ).animate({
                        width: "55px"
                    }, 250, 'easeInOutCubic');
                    jQuery(".head-logo").stop( true, true ).animate({
                        width: "55px"
                    }, 250, 'easeInOutCubic');
                });
            }

        }
    }
}) 
;app.directive("elevation",function() {
    return {
        restrict: 'AE',
        scope:false,
        css: 'partials/elevation/elevation.style.css',
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '1': 'ldgfx-elevation-1',
                '2': 'ldgfx-elevation-2',
                '3': 'ldgfx-elevation-3',
                '4': 'ldgfx-elevation-4',
                '5': 'ldgfx-elevation-5',
            })[ attrs.elevation ] || 'ldgfx-elevation-1' );

        }
    };
})
;app.directive("toolBar",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-toolbar" ng-transclude></div>',
        css: '/partials/flatheader/header.style.css',
    };
})

app.directive("toolBarBig",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-toolbar-big" ng-transclude></div>',
    };
});app.directive("fluidContainer",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:false,
        css:'partials/fluid/fluid.style.css',
        template:   '<div class="partials-fluid-container" ng-transclude></div>',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass( bgcolor = ({                                 
                'column': 'partials-fluid-container-column',
                'row': 'partials-fluid-container-row',
            })[ attrs.direction ] || 'partials-fluid-container-column' );
        }
    };
}) 

app.directive("col",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-col');
        }
    };
})

app.directive("row",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-row');
        }
    };
})

app.directive("fill",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-flex');
        }
    };
})

app.directive("autoalign",function() {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-fluid-autoalign');
        }
    };
})



;

app.directive("checkboxInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<label>'+
                        '<input class="partials-input-checkbox" type="checkbox">'+
                        '<span class="partials-input-checkbox-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-checkbox-uncheck">check_box_outline_blank</i>'+
                            '<i class="material-icons partials-input-checkbox-checked">check_box</i>'+
                        '</span>'+
                    '</label>'
    };
})


app.directive("radioInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<label>'+
                        '<input class="partials-input-radio" type="radio">'+
                        '<span class="partials-input-radio-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-radio-uncheck">radio_button_unchecked</i>'+
                            '<i class="material-icons partials-input-radio-checked">radio_button_checked</i>'+
                        '</span>'+
                    '</label>'
    };
})

app.directive("toggleInput",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            iconon:'@',
            iconoff:'@'
        },
        template:   '<label>'+
                        '<input class="partials-input-checkbox" type="checkbox">'+
                        '<span class="partials-input-checkbox-icon" ripple-fixed>'+
                            '<i class="material-icons partials-input-checkbox-uncheck">{{ iconoff }}</i>'+
                            '<i class="material-icons partials-input-checkbox-checked" ink="500">{{ iconon }}</i>'+
                        '</span>'+
                    '</label>'
    };
})

app.directive("inputText",function($compile,Toast) {
    return {
        restrict: 'AE',
        transclude: true,
        replace: false,
        scope:{
            parameter:'@',
            execute:'&',
            errorModal:'=',
            rules:'='
        },
        template:   '<div class="ldgfx-input-text" ng-form="myform">'+
                        '<fluid-container direction="row">'+
                            '<input class="ldgfx-inputelement-text" name="name" type="text" ng-model="model.name" ng-disabled="!edit" primary="A700" fill>'+
                            '<font-icon class="ldgfx-input-text-icon" icon="edit" ng-show="!edit && !loader" clickable="true" ng-click="showInput()"></font-icon>'+
                            '<font-icon class="ldgfx-input-text-icon" icon="check" ng-show="edit && !loader" clickable="true" ng-click="runQuery()"></font-icon>'+
                            '<loader ng-show="loader"></loader>'+
                        '</fluid-container>'+
                        '<div ng-messages="myform.name.$error">'+
                            '<div ng-transclude></div>'+
                        '</div>'+
                    '</div>',
        link: function(scope, element, attrs){

            let input = $(element).find('.ldgfx-inputelement-text')

            scope.rules.forEach(function(rule){
                $(input).attr(rule,'');
            })

            $compile($(input))(scope);

        },
        controller: function($scope,$timeout,Modal){

            $scope.edit     = false;
            $scope.loader   = false;
            $scope.model    = {name: $scope.parameter}
    
            $scope.$watch('parameter',function(newParameter){
                $scope.model.name = newParameter;
            })

            $scope.showInput = function(){
                $scope.edit = true;
            }

            $scope.runQuery = function($event){

                if($scope.myform.$valid){

                    $scope.loader = true;
                    $scope.edit = false;

                    $scope.execute()($scope.model.name)
                    .then(function(success){
                        $timeout(function(){
                            $scope.loader = false;
                        },250)
                    }).catch(function(err){
                        $timeout(function(){
                            console.log(err);
                            $scope.loader = false;
                        },250)
                    })

                }else{
                    Modal.setContent($scope.errorModal)
                    Modal.display();
                }

            }

        } 
    };
})


app.directive("inputRangeTicks",function() {
    return {
        restrict: 'E',  
        transclude: true,
        replace: true,
        scope:{
            ticks: '=' 
        },
        template:  '<div class="ldgfx-input-range">'+
                        '<input class="ldgfx-input-range-slider" type="range" min="0" max="{{ ticks.length }}" step="1">'+
                        '<fluid-container direction="row" class="ldgfx-input-range-ticks" >'+
                            '<div style="margin-top:-38px;" class="ldgfx-input-range-tick" ng-repeat="tick in ticks" fill>'+
                                '<div ng-if="$even" style="width:1px;border-left:1px solid #929fa6; height:5px" class="ldgfx-input-range-tick-separator-small"></div>'+
                                '<div ng-if="$odd" style="width:1px;border-left:1px solid #929fa6; height:8px" class="ldgfx-input-range-tick-separator-big"></div>'+
                                '<p ng-if="$odd"  style="margin-top:0px;" class="ldgfx-input-range-tick-text" >{{ tick }}</p>'+
                            '</div>'+
                        '</fluid-container>'+
                    '</div>'
    };
})


app.directive("inputRange",function() {
    return {
        restrict: 'E',  
        transclude: true,
        replace: true,
        scope:{ 
            ngModel: '=ngModel',
            min: '=',
            max: '=',
            title: '@' 
        },
        template:  '<div class="ldgfx-input-range">'+
                        '<fluid-container direction="row">'+
                            '<p autoalign style="margin-right:16px;"> {{title}} </p>'+
                            '<input fill autoalign class="ldgfx-input-range-slider" ng-change="submit(ngModel)" ng-model="ngModel" type="range" min="{{ min }}" max="{{ max }}">'+
                            '<p autoalign style="margin-left:16px;"> {{ngModel}} </p>'+
                        '</fluid-container>'+
                    '</div>',
        controller: function($scope){
            $scope.submit = function(val){
                $scope.ngModel = val;
            }
        }
    };
})


/**
 * Directives destinated to set focus on an input
 * once it is shown on the user's screen 
 * TODO: SOLVE inputting weird problem
 */

app.directive('setFocus',function($timeout) {
    return {
        restrict : 'AE',
        link : function($scope,$element,$attr) {
            $scope.$watch($attr.setFocus,function(value) {
                $timeout(function() {
                    value ? $element[0].focus() : $element[0].blur();
                });
            });
        }
    }
})



/**
 * Directives destinated for ng-messages 
 * in order to conditionnaly display error 
 * messages under inputs  
 */

app.directive("charonly", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.charonly = function(modelValue) {  
                return (!(/[^A-zÀ-ÿ\ \-]/.test( modelValue )));
            }
        }
    };
});

app.directive("hasaspace", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.hasaspace = function(modelValue) {
                return ((/^([A-zÀ-ÿ]+[\s]+[A-zÀ-ÿ]*)*$/.test( modelValue )));
            }
        }
    };
});

app.directive("isaname", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaname = function(modelValue) {
                return ((/^([A-zÀ-ÿ]+[\s]+[A-zÀ-ÿ]*)$/.test( modelValue )));
            }
        }
    };
});

app.directive("isaniceid", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaniceid = function(modelValue) {
                return ((/^[A-Z]{2}[0-9]{2}[A-Z]{1}[0-9]{3}S*$/.test( modelValue )));
            }
        }
    };
});


app.directive("isadevid", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.isaniceid = function(modelValue) {
                return ((/^[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}S*$/.test( modelValue )));
            }
        }
    };
});;
;




/**
 * Progress visualization
 * Put into inputs as some of the progress might rely
 * on a certain data input (eg. file upload)
 * TODO: move in a separate folder for ldgfx lib
 */

app.directive("loader",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="loader">'+
                        '<svg class="circular" viewBox="25 25 50 50">'+
                        '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>'+
                        '</svg>'+
                    '</div>'
    };
})

app.directive("progressIndeterminate",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div ng-hide="ready" class="ldgfx-loader-indeterminate" primary="100">'+
                        '<div class="ldgfx-loader-indeterminate-progress" primary="600"></div>'+
                    '</div>'
    };
})

;app.directive("mediaShow",function($parse) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope, elem, attrs){

            elem.addClass( ({                                 
                'small':  'ldgfx-mediashow-small',
                'medium': 'ldgfx-mediashow-medium',
                'large':  'ldgfx-mediashow-large',
                'xlarge': 'ldgfx-mediashow-xlarge',
            })[attrs.mediaShow] || '');

        }
    };
});
 app.directive("menu",function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            items:'='
        },
        template:   '<div class="ldgfx-menu">'+ 
                        '<font-icon clickable="true" ng-click="displayMenu()" icon="more_vert"></font-icon>'+
                        '<card elevation="2" class="ldgfx-menu-card" ng-show="displayMenuStatus">'+
                            '<fluid-container direction="column">'+
                                '<div class="ldgfx-menu-item" ng-click="item.action();hideMenu();" ng-repeat="item in items" fill>'+
                                    '<div class="ldgfx-textual-list-subheading">'+
                                        '<language vocabulary="item.description"></language>'+
                                    '</div>'+
                                '</div>'+
                            '</fluid-container>'+
                        '</card>'+
                    '</div>',
        controller: function($scope,$element,$compile){

            $scope.displayMenuStatus = false;
            let backdrop = $compile('<div ng-click="hideMenu()" class="ldgfx-menu-background"></div>')($scope);
            
            $scope.displayMenu = function(){
                $scope.displayMenuStatus = true;
                $($element).append(backdrop);
            }

            $scope.hideMenu = function(){
                $scope.displayMenuStatus = false;
                $(backdrop).remove();
            }

        },
        link: function(scope, elem, attrs){

            $(elem).children('.ldgfx-menu-card').addClass(({
                'left':'anchor-left',
                'right':'anchor-right',
            })[attrs.anchorX]);

            $(elem).children('.ldgfx-menu-card').addClass(({
                'top':'anchor-top',
                'bottom':'anchor-bottom',
            })[attrs.anchorY]);

        }
     
    };
})


 app.directive("listMenu",function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            menuTitle:'='
        },
        template:   '<div>'+
                        '<perfect-list class="ldgfx-list-menu-options" ng-show="displayList" >'+
                            '<perfect-list-item ng-click="displayOption($index)" ng-repeat="option in options">'+
                                '<font-icon autoalign icon="{{ option.icon }}" style="color:rgba(0,0,0,.74);margin-left:16px;margin-right:16px;"></font-icon>'+
                                '<div class="ldgfx-perfectlist-text">'+
                                    '<div class="ldgfx-textual-list-heading"><language vocabulary="option.description.title"></language></div>'+
                                '</div>'+
                            '</perfect-list-item>'+
                        '</perfect-list>'+
                        '<div class="ldgfx-list-menu-option" ng-hide="displayList" ng-transclude></div>'+
                        '<button-fab ng-show="!displayList" ng-click="backToMenu()" icon="keyboard_return"></button-fab>'+
                    '</div>',
        controller: function($scope, $timeout, NavBarLeft){

            $scope.options      = [];                   //Initializing scope's array "options"
            $scope.displayList  = true;                 //Initializing menu to display option list
            

            /**
             * Displays an option of the scope's array "options"
             * @param {integer} index the index of the option to be displayed
             */
            $scope.displayOption = function(index){

                $scope.options.forEach(function(option){    //Looping through each options of the menu
                    option.displayed = false;               //Setting every options as "not displayed"
                })

                $scope.displayList  = false;
                $scope.title        = $scope.options[index].description.title;
                $scope.returnAction = $scope.backToMenu;
                $scope.menuIcon     = 'close';

                $scope.options[index].displayed = true;     //Setting selected option as displayed

            }

            /**
             * Displays an option of the scope's array "options"
             * @param {integer} index the index of the option to be displayed
             */
            $scope.backToMenu = function(index){
                $scope.displayList  =  true;
            }


            /**
             * Adds an option into the scope's array "options"
             * @param {$scope} option the scope of the option which needs to be added
             */
            this.addOption = function(option){
                $scope.options.push(option);                       //Pushing new option into the scope's options array
            }

        }

    };
})

 app.directive("menuOption", function() {
    return {
        restrict: 'AE',
        require:'^listMenu',
        transclude: true,
        replace: false,
        scope:{
            icon:'@',
            description:'='
        },
        template:  '<div ng-transclude ng-show="displayed"></div>',
        link: function(scope, element, attrs, listMenuCtrl){
            listMenuCtrl.addOption(scope);
        },

    };
});
app.directive("mobileShadow",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-mobile-shadow')
        }
    };
});

app.directive("mobileHidden",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-mobile-hidden')
        }
    };
});

app.directive("desktopHidden",function() {
    return {
        restrict: 'AE',
        transclude: false,
        replace: false,
        scope:false,
        link: function(scope, elem, attrs){
            elem.addClass('ldgfx-desktop-hidden')
        }
    };
});;app.directive('modal',function(Modal, Backdrop, Company) {
    return {
        restrict: 'E',
        replace: false,
        scope:false,
        template:   '<card elevation="5" ng-show="displayed" class="ldgfx-modal">'+
                        '<fluid-container class="ldgfx-modal-container" direction="column">'+
                            '<fluid-container direction="column" class="ldgfx-modal-text-container">'+
                                '<h2><language vocabulary="modal.title"></language></h2>'+
                                '<p class="ldgfx-modal-content"><language vocabulary="modal.content"></language></p>'+
                                '<div class="ldgfx-modal-content-html"></div>'+
                            '</fluid-container>'+
                            '<fluid-container class="ldgfx-modal-button-container" direction="row">'+
                                '<fill></fill>'+
                                '<button-flat ng-if="modal.cancel" text="modal.cancel" ng-click="closeModal()"></button-flat>'+
                                '<button-flat ink="A400" text="modal.validate" ng-click="modal.executeOnValidation();closeModal()"></button-flat>'+
                            '</fluid-container>'+
                        '</fluid-container>'+
                    '</card>',
        controller:function($scope, $rootScope, $timeout, $compile){
            
            $scope.modal        = Modal;
            $scope.displayed    = false;

            $scope.$watch('modal.html', function(html) {
                $(".ldgfx-modal-content-html").html(html);
            });

            Backdrop.hide();  

            $scope.$on("modal-display",function(event, modal){
                $timeout(function(){
                    Backdrop.setCloseAction(null);
                    Backdrop.display();
                    $scope.displayed = true;
                })
            })
            

            $scope.closeModal = function(){
                setTimeout(function(){           
                    $scope.$apply(function(){
                        $scope.displayed = false;
                    })
                },200)
            }

        }
    };
})
;app.factory('Modal',function($rootScope){


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

});;
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
;app.directive("navBarLeft",function( $compile,  $timeout) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope:{},
        template:   '<div ng-show="displayed" class="ldgfx-nav-bar ldgfx-nav-bar-left" >'+
                        '<tool-bar ng-show="displayHeader" primary="A700" style="z-index:30"></tool-bar>'+
                        '<tool-bar ng-show="displayHeader" primary="A700" style="z-index:30">'+
                            '<font-icon autoalign clickable="true" ng-click="hideNavBar()" icon="arrow_back"></font-icon>'+
                            '<h2 style="margin-left:16px;" autoalign fill><language vocabulary="navBarLeft.vocabularyObject.global.title"></language></h2>'+
                        '</tool-bar>'+
                        '<progress-indeterminate ng-hide="ready"></progress-indeterminate>'+
                        '<ng-include src="navBarLeft.templateUrl"></ng-include>'+
                    '</div>', 
        controller: function($scope){

            $scope.navBarLeft       = null;
            $scope.displayHeader    = true
            $scope.ready            = false;

            $scope.hideNavBar = function(){
                $scope.navBarLeft       = null;
                $scope.displayHeader    = true;
                $scope.displayed        = false;
                $scope.ready            = false;
            }

            $scope.$on('navBarLeft-display',function(event, navBar){
                $timeout(function(){
                    $scope.navBarLeft   = navBar;
                    $scope.displayed    = true;
                })
            })

            $scope.$on('navBarLeft-hide',function(event, navBar){
                $timeout(function(){
                    $scope.hideNavBar();
                })
            })

            $scope.$on('navBarLeft-contentReady',function(){
                $timeout(function(){
                    $scope.ready = true;
                })
            })

            $scope.$on('navBarLeft-displayHeader',function(event, displayed){
                $timeout(function(){
                    displayed ? $scope.displayHeader = true : $scope.displayHeader = false; 
                })
            })

        }
    };
})


app.directive("navBarRight",function($compile,$timeout,ResourcesFactory) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<div ng-show="displayed"  class="ldgfx-nav-bar ldgfx-nav-bar-right ldgfx-nav-bar-push" ng-transclude>'+
                        '<tool-bar style="z-index:50" primary="500">'+
                            '<font-icon autoalign clickable="true" ng-click="hideNavBarRight()" icon="close"></font-icon>'+
                            '<h2 style="margin-left:16px;" autoalign fill>'+
                                '<language vocabulary="navBarRight.vocabularyObject.global.title"></language>'+
                            '</h2>'+
                            '<menu autoalign anchor-x="left" items="headerOptions"></menu>'+
                        '</tool-bar>'+
                        '<tool-bar primary style="z-index:30"></tool-bar>'+
                        '<loader-indeterminate ng-hide="ready"></loader-indeterminate>'+
                        '<ng-include src = "navBarRight.templateUrl"></ng-include>'+  
                    '</div>',
        controller: function($scope){
  
            $scope.navBarRight = null;

            $scope.hideNavBarRight = function(){
                $scope.navBarRight  = null;
                $scope.displayed    = false;
                ResourcesFactory.displayedPage.panes.right[0].display();
            }

            var createHeaderOptions = function(){
                $scope.headerOptions = ResourcesFactory.displayedPage.panes.right.map(function(pane) {
                    return {
                        description: pane.view.title,
                        action: function(){
                            pane.display();  
                        }
                    }
                });
                console.log($scope.headerOptions);
            }

            $scope.$on('navBarRight-display',function(event, navBar){
                $timeout(function(){
                    $scope.navBarRight  = navBar;
                    $scope.displayed    = true;
                    createHeaderOptions();
                })
            })

        }
    };
});app.factory('NavBarLeft',function($rootScope){

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

});;app.controller('onboardingCtrl', function ($scope,$timeout,Backdrop,Onboarding) {

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

});;app.directive("featureDiscoveryFab",function() {
    return {
        restrict: 'AE',
        replace: true,
        scope:{
            'vocabulary':'='
        },
        template: '<div class="ldgfx-discovery-fab" primary>'+
                        '<button-fab ripple-constant style="z-index: 20; background-color: white; transform: scale(1.6); box-shadow: none; left: calc(50% + 28px); top: calc(50% + 28px);"></button-fab>'+
                        '<div class="ldgfx-onboarding-fab-text-container">'+
                            '<h2><language vocabulary="vocabulary.title"></language></h2>'+
                            '<h5 style="white-space: normal;"><language vocabulary="vocabulary.description"></language></h5>'+
                        '</div>'+
                    '</div>',
        controller: function($scope, $timeout){
            
            $scope.$watch('vocabulary', function(newValue){
                $timeout(function(){
                    $scope.vocabulary = newValue;
                })
            })

        }
    };
})


app.directive("onboarding",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'onboardingEnd':  '&'
        },
        template:   '<div class="ldgfx-onboarding-container" elevation="2">'+
                        '<fluid-container style="height: 100%;" direction="column" autoalign >'+
                            '<div style="height: calc(100% - 56px);" ng-transclude></div>'+
                            '<tool-bar class="ldgfx-stepper-footer" primary>'+
                                '<fluid-container direction="row" fill>'+
                                    '<button-flat ng-click="displayPrev()" autoalign text="buttonText.prev"></button-flat>'+
                                    '<fill></fill>'+
                                    '<div autoalign class="ldgfx-stepper-container-control-bottom">'+
                                        '<div autoalign class="ldfx-stepper-dot" ng-class="{\'active\': step.displayed}" ng-repeat="step in steps">&#9679</div>'+
                                    '</div>'+
                                    '<fill></fill>'+
                                    '<button-flat ng-click="displayNext()" autoalign text="buttonText.next"></button-flat>'+
                                '</fluid-container>'+
                            '</tool-bar>'+
                        '</fluid-container>'+
                    '</div>',
        controller: function( $scope, Backdrop){

            Backdrop.setCloseAction(null);
            Backdrop.display();

            /**
             * Initializing controller & scope variables 
             */
            let steps = $scope.steps = [];
            $scope.activeStep = 0;

            $scope.buttonText = {
                "prev":[
                    {"lang":"en","text":"prev"},
                    {"lang":"fr","text":"prec"}
                ],
                "next":[
                    {"lang":"en","text":"next"},
                    {"lang":"fr","text":"suiv"}
                ],
                "done":[
                    {"lang":"en","text":"done"},
                    {"lang":"fr","text":"terminer"}
                ]
            },

            /**
             * Displays the previous step  in the array
             * by decrementing the activeStep counter
             */
            $scope.displayPrev = function(){
                if($scope.activeStep > 0){
                    $scope.activeStep--;
                    steps.forEach(function(step,index) {
                        step.displayed = false;
                        step.reverse = false;
                    });
                    steps[$scope.activeStep].displayed = true;
                }
            }

            /**
             * Displays the next step  in the array
             * by incrementing the activeStep couter
             */
            $scope.displayNext = function(){
                if($scope.activeStep < steps.length -1){
                    $scope.activeStep++;
                    steps.forEach(function(step,index) {
                        step.displayed = false;
                        step.reverse = true;
                    });
                    steps[$scope.activeStep].displayed = true
                }else{
                    $scope.onboardingEnd();
                }
            }

            /**
             * Adds a new step into the steps array 
             * for each step declared within the stepper directive
             */
            this.addStep = function(step) {
                steps.push(step);
                if(steps.length === 1)  steps[0].displayed = true;
            }
        },

    };
})

app.directive("onboardingPanne",function() {
    return {
        restrict: 'AE',
        require: '^onboarding',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<div class="ldgfx-stepper-step-content" style="height: calc(100% - 56px);" ng-class="{left:reverse}" ng-show="displayed">'+
                        '<div class="ldgfx-stepper-step" style="height:100%" ng-transclude></div>'+
                    '</div>',
        link: function(scope, element, attrs, onboardingCtrl){
            onboardingCtrl.addStep(scope);
        },
    };
});app.factory('Onboarding',function(NavBarLeft){
    var Onboarding = angular.extend(this,NavBarLeft);
    return Onboarding;
});; app.directive("ripple",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs, ctrl){

            var timeoutRipple;
 
            elem.bind('click', function(e){             //Binding click on element

                clearTimeout(timeoutRipple);

                let target = $(elem);                   //Instanciating target to be used with JQuery
                $('.partials-ripple').remove();         //Removing any ripple container that was here before (might happen in case of click bashing)
                
                div = $('<div/>');                      //Preparing appended child
                div.addClass('partials-ripple');        //Preparing child's class
                div = $compile('<div class="partials-ripple" primary="A100"></div>')(scope);

                target.prepend(div);

                let btnOffset = $(elem).offset(),       //Calculating offset
                    xPos = e.pageX - btnOffset.left,    //Calculating ripple position
                    yPos = e.pageY - btnOffset.top,     //Calculatingf ripple position
                    rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight); //Calculating ripple radius based on container's shape

               $(div).css({                             //Positionnning ripple on target
                    top: yPos - ((rippleMaxSize)/2),    //Setting top position
                    left: xPos - (rippleMaxSize/2),     //Setting left position
                    height: rippleMaxSize,              //Setting dimensions to fit target
                    width: rippleMaxSize,               //Setting dimensions to fit target
                    transform: "scale(0,0)"             //Setting scale to "0"
                });

                timeoutRipple = setTimeout(function(){ 
                    $('.partials-ripple').remove(); 
                }, 400);

            });
        }
    }
 });

  app.directive("rippleFixed",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs){

            var timeoutRipple;
 
            elem.bind('click', function(e){             //Binding click on element

                clearTimeout(timeoutRipple);

                let target = $(elem);                   //Instanciating target to be used with JQuery
                $('.partials-ripple-fixed').remove();   //Removing any ripple container that was here before (might happen in case of click bashing)
                
                div = $compile('<div class="partials-ripple-fixed" primary="A100"></div>')(scope);

                let btnOffset = $(elem).offset(),   //Calculating offset
                    rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight);   //Calculating ripple radius based on container's shape

               $(div).css({                     //Positionnning ripple on target
                    height: rippleMaxSize,      //Setting dimensions to fit target
                    width: rippleMaxSize,       //Setting dimensions to fit target
                    transform: "translate(-50%,-50%) scale(0,0)"  //Setting scale to "0"
                }); 

                target.prepend(div);

                timeoutRipple = setTimeout(function(){ 
                    $('.partials-ripple-fixed').remove(); 
                }, 400);

            });
        }
    }
 });

   app.directive("rippleConstant",function($compile) {
    return {
        restrict: 'AE',
        scope: false,
        css:'partials/ripple/ripple.style.css',
        link: function(scope, elem, attrs){

            let target = $(elem);                   //Instanciating target to be used with JQuery

            div = $compile('<div class="partials-ripple-constant" primary="A100"></div>')(scope);

            let btnOffset = $(elem).offset(),   //Calculating offset
                rippleMaxSize = Math.max(target[0].offsetWidth,target[0].offsetHeight);   //Calculating ripple radius based on container's shape

            $(div).css({                     //Positionnning ripple on target
                height: rippleMaxSize,      //Setting dimensions to fit target
                width: rippleMaxSize,       //Setting dimensions to fit target
                transform: "translate(-50%,-50%) scale(0,0)"  //Setting scale to "0"
            }); 

            target.prepend(div);

        }
    }
 });;app.directive("scrollbar",function($compile) {
    return {
        restrict: 'AE',
        link: function(scope, elem, attrs){
            
            /**
             * Attaching scrollbar to element 
             */
            $(elem).mCustomScrollbar({
                theme: "dark-thin",
                axis: "y",
                documentTouchScroll: true
            });

            /**
             * setting
             */
            $('.mCSB_container').css({
                'margin-right': '0px'
            })

            $('.mCSB_draggerContainer').css({
                'top': '10px',
                'bottom':'10px'
            })
        }
    };
});app.directive("shadow",function() {
    return {
        restrict: 'AE',
        scope:false,
        css:'partials/shadow/shadow.style.css',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-shadow');
        }
    };
})

app.directive("shadowBig",function() {
    return {
        restrict: 'AE',
        scope:false,
        css:'partials/shadow/shadow.style.css',
        link: function(scope, elem, attrs, ctrl){
            elem.addClass('partials-shadow-big');
        }
    };
})
;app.directive("splashScreen",function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:false,
        template:   '<div class="ldgfx-splashscreen" ng-transclude>'+
                    '</div>'
    };
})
;app.controller('stepperCtrl', function($scope){

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
});app.directive("stepper",function() {
    return {

        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            'stepperEnd':  '&',
            'form': '='
        },
        template:   '<div class="ldgfx-stepper-container">'+
                        '<fluid-container style="height: 100%;" direction="column" autoalign >'+
                            '<div style="height: calc(100% - 56px);" ng-transclude></div>'+
                            '<tool-bar class="ldgfx-stepper-footer" primary>'+
                                '<fluid-container direction="row" fill>'+
                                    '<button-flat ng-click="displayPrev()" autoalign text="buttonText.prev"></button-flat>'+
                                    '<fill></fill>'+
                                    '<div autoalign class="ldgfx-stepper-container-control-bottom">'+
                                        '<div autoalign class="ldfx-stepper-dot" ng-class="{\'active\': step.displayed}" ng-repeat="step in steps">&#9679</div>'+
                                    '</div>'+
                                    '<fill></fill>'+
                                    '<button-flat ng-click="displayNext()" autoalign text="buttonText.next"></button-flat>'+
                                '</fluid-container>'+
                            '</tool-bar>'+
                        '</fluid-container>'+
                    '</div>',
        controller: function( $scope, Modal){

            /**
             * Initializing controller & scope variables 
             */
            let steps = $scope.steps = [];
            $scope.activeStep = 0;

            $scope.buttonText = {
                "prev":[
                    {"lang":"en","text":"prev"},
                    {"lang":"fr","text":"prec"}
                ],
                "next":[
                    {"lang":"en","text":"next"},
                    {"lang":"fr","text":"suiv"}
                ],
                "done":[
                    {"lang":"en","text":"done"},
                    {"lang":"fr","text":"terminer"}
                ]
            },

            /**
             * Displays the previous step  in the array
             * by decrementing the activeStep counter
             */
            $scope.displayPrev = function(){
                if($scope.activeStep > 0){
                    $scope.activeStep--;
                    steps.forEach(function(step,index) {
                        step.displayed = false;
                        step.reverse = false;
                    });
                    steps[$scope.activeStep].displayed = true;
                }
            }

            /**
             * Displays the next step  in the array
             * by incrementing the activeStep couter
             */
            $scope.displayNext = function(){
                if($scope.form.$valid){
                    if($scope.activeStep < steps.length -1){
                        $scope.activeStep++;
                        steps.forEach(function(step,index) {
                            step.displayed = false;
                            step.reverse = true;
                        });
                        steps[$scope.activeStep].displayed = true
                    }else{
                        $scope.stepperEnd();
                    }
                }else{
                    Modal.setContent({
                        "title":[
                            {"lang":"en","text":"Wrong Parameters"},
                            {"lang":"fr","text":"Paramètres erronés"}
                        ],
                        "content":[
                            {"lang":"en","text":"Please make sure that no error is displayed below the input"},
                            {"lang":"fr","text":"Veuillez vous assurer qu'aucune errur n'est affichée en dessous du texte saisi"}
                        ],
                        "validate":[
                            {"lang":"en","text":"ok"},
                            {"lang":"fr","text":"ok"}
                        ]
                    });
                    Modal.executeOnValidation = null;
                    Modal.display()
                }
            }

            /**
             * Adds a new step into the steps array 
             * for each step declared within the stepper directive
             */
            this.addStep = function(step) {
                steps.push(step);
                if(steps.length === 1)  steps[0].displayed = true;
            }
        },

    };
})

app.directive("lstep",function() {
    return {
        restrict: 'AE',
        require: '^stepper',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<div class="ldgfx-stepper-step-content" style="height: calc(100% - 56px);" ng-class="{left:reverse}" ng-if="displayed">'+
                        '<div class="ldgfx-stepper-step" ng-transclude></div>'+
                    '</div>',
        link: function(scope, element, attrs, stepperCtrl){
            stepperCtrl.addStep(scope);
        },
    };
});app.controller('tabsCtrl', function ($scope, $timeout, PageManager, Page) {

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

});;app.directive('tabs',function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: false,
        scope:{},
        template:   '<span style="background:inherit;">'+
                        '<fluid-container style="background:inherit;height:calc(100% - 56px)" direction="column" ng-init="display(tabs[0])">'+
                            '<tool-bar mobile-shadow class="ldgfx-tabs-toolbar">'+
                                '<li ripple autoalign ng-repeat="tab in tabs" ng-click="display(tab);tab.action()" class="ldgfx-tab" ng-class="{active:tab.displayed,backward:backward,forward:!backward}">'+
                                    '<div class="ldgfx-tab-title ldgfx-textual-button" autoalign>'+
                                        '<language vocabulary="tab.title"></language>'+
                                    '</div>'+
                                    '<div class="ldgfx-tab-borderbottom" ng-show="tab.displayed"></div>'+
                                '</li>'+
                            '</tool-bar>'+
                            '<div fill ng-class="{backward:backward,forward:!backward}" class="ldgfx-tab-content" ng-transclude></div>'+
                        '</fluid-container>'+
                    '</span>',
        controller: function ($scope, $timeout) {

            /***
             * NO Time, but would be easier to extend the stepper for this.. since only tabs must be displayed
             * And content is just allocated to clicks on these tabs
             */
            let tabs = $scope.tabs = []; 
            var currentIndex = -1;

            $scope.backward = true;

            $scope.display = function(currentTab){

                let newIndex = tabs.indexOf(currentTab);

                if(newIndex > currentIndex){
                    $scope.backward = false;
                }else if(newIndex < currentIndex){
                    $scope.backward= true;
                }

                angular.forEach(tabs,function(tab) {
                    tab.displayed = false;
                });


                if(currentTab) currentTab.displayed = true; //TODO: FIx this line, it's proper shit
                currentIndex = newIndex;

            }

            this.addTab = function(tab) {
                if(tabs.length === 0) $scope.display(tab);
                tabs.push(tab);
            }

        }
    };
})

app.directive('tab',function() {
    return {
        require: '^tabs',
        restrict: 'E', 
        transclude: true,
        replace: true,
        scope:{ 
            title: '=',
            action: '='
        },
        link: function(scope, element, attrs, tabsCtrl){
            tabsCtrl.addTab(scope);
        },
        template:   '<div class="ldgfx-tab-container" ng-show="displayed" ng-transclude></div>',
    };
}) ;app.directive("textDisplay4",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display4');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay3",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display3');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay2",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display2');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textDisplay1",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-display1');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textHeadline",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-headline');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textTitle",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-title');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textSubheading",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-subheading');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textBody2",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-body2');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textBody1",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-body1');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textCaption",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-caption');
            elem.addClass('.ldgfx-color-text-secondary');
        }
    };
})

app.directive("textMenu",function() {
    return {
        restrict: 'AE',
        scope: false,
        link: function(scope,elem){
            elem.addClass('ldgfx-textual-menu');
            elem.addClass('ldgfx-color-text-primary');
        }
    };
})

app.directive("textButton",function() {
    return {
        restrict: 'AE',
        scope: {
            theme:'@'
        },
        link: function(scope,elem,attrs){
            elem.addClass('ldgfx-textual-button');
            if(scope.theme === "accent"){
                elem.addClass('ldgfx-color-text-accent');
            }else{
                elem.addClass('ldgfx-color-text-primary');
            }
        }  
    };
})

app.directive("textListL2",function() {
    return {
        restrict: 'AE',
        scope: {
            theme:'@'
        },
        link: function(scope,elem,attrs){
            elem.addClass('ldgfx-textual-body1');
            elem.addClass('ldgfx-color-text-secondary');
        }  
    };
})

app.directive("fontIcon",function($compile) {
    return {
        restrict: 'AE',
        scope: {
            icon:'@',
            clickable:'@',
            theme:'@'
        },
        template: '<i ng-attr-ripple-fixed="{{clickable}}" ng-class="{\'ldgfx-color-icon-hoverable\':clickable}" class="material-icons ldgfx-textual-fonticon ldgfx-color-icon-active">{{ icon }}</i>',
        link:function(scope, elem, attrs){
            if(scope.clickable){
                elem.bind('click',function(e){
                    e.stopPropagation();
                })
            }
        }
    };
})

app.directive("subheading",function($compile) {
    return {
        restrict: 'AE',
        scope: {
            text:'@'
        },
        template: '<div class="ldgfx-textual-subheading" ink="A400">{{ text }}</div>',
    };
});app.directive("secondary",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            scope.$on('theme-updated', function(){

                elem.addClass( status = ({                                 
                    '500': 'ldgfx-color-500 '+ ThemeFactory.secondary,
                    '50':  'ldgfx-color-50  '+ ThemeFactory.secondary,
                    '100': 'ldgfx-color-100 '+ ThemeFactory.secondary,
                    '200': 'ldgfx-color-200 '+ ThemeFactory.secondary,
                    '300': 'ldgfx-color-300 '+ ThemeFactory.secondary,
                    '400': 'ldgfx-color-400  '+ ThemeFactory.secondary,
                    '500': 'ldgfx-color-500 '+ ThemeFactory.secondary,
                    '600': 'ldgfx-color-600 '+ ThemeFactory.secondary,
                    '700': 'ldgfx-color-700 '+ ThemeFactory.secondary,
                    '800': 'ldgfx-color-800  '+ ThemeFactory.secondary,
                    '900': 'ldgfx-color-900 '+ ThemeFactory.secondary,
                    'A100': 'ldgfx-color-A100 '+ ThemeFactory.secondary,
                    'A200': 'ldgfx-color-A200 '+ ThemeFactory.secondary,
                    'A400': 'ldgfx-color-A400 '+ ThemeFactory.secondary,
                    'A700': 'ldgfx-color-A700 '+ ThemeFactory.secondary,
                })[attrs.secondary] || 'ldgfx-color-500 '+ ThemeFactory.secondary );

            });

        }
    };
}]);

app.directive("primary",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '500': 'ldgfx-color-500 ',
                '50':  'ldgfx-color-50  ',
                '100': 'ldgfx-color-100 ',
                '200': 'ldgfx-color-200 ',
                '300': 'ldgfx-color-300 ',
                '400': 'ldgfx-color-400 ',
                '500': 'ldgfx-color-500 ',
                '600': 'ldgfx-color-600 ',
                '700': 'ldgfx-color-700 ',
                '800': 'ldgfx-color-800 ',
                '900': 'ldgfx-color-900 ',
                'A100': 'ldgfx-color-A100 ',
                'A200': 'ldgfx-color-A200 ',
                'A400': 'ldgfx-color-A400 ',
                'A700': 'ldgfx-color-A700 ',
            })[attrs.primary] || 'ldgfx-color-500 ' );

            elem.addClass(ThemeFactory.primary);

            scope.$on('theme-updated', function(){
                $(elem).removeClass(ThemeFactory.previous).addClass(ThemeFactory.primary);
            })

        }
    };
}]);

app.directive("ink",['ThemeFactory', function(ThemeFactory) {
    return {
        restrict: 'AE',
        scope:false,
        link: function(scope,elem,attrs){

            elem.addClass( status = ({                                 
                '500': 'ldgfx-ink-500 ',
                '50':  'ldgfx-ink-50  ',  
                '100': 'ldgfx-ink-100 ',
                '200': 'ldgfx-ink-200 ',
                '300': 'ldgfx-ink-300 ',
                '400': 'ldgfx-ink-400 ',
                '500': 'ldgfx-ink-500 ',
                '600': 'ldgfx-ink-600 ',
                '700': 'ldgfx-ink-700 ',
                '800': 'ldgfx-ink-800 ',
                '900': 'ldgfx-ink-900 ',
                'A100': 'ldgfx-ink-A100 ',
                'A200': 'ldgfx-ink-A200 ',
                'A400': 'ldgfx-ink-A400 ',
                'A700': 'ldgfx-ink-A700 ',
            })[attrs.ink] || 'ldgfx-ink-500 ');

            elem.addClass(ThemeFactory.primary);

            scope.$on('theme-updated', function(){
                try{
                    $(elem).removeClass(ThemeFactory.previous).addClass(ThemeFactory.primary);
                }catch(err){
                    console.log(err)
                }
            })

        }
    };
}]);;app.factory('ThemeFactory', function($rootScope, ViewManager) {

  this.primary = 'red';
  this.secondary = 'brightred';
  this.previous = null;

  this.setTheme = function(theme){
        this.previous = this.primary;
        this.primary = theme;
        $rootScope.$broadcast('theme-updated');
  }

  return this;

});;app.directive("toast",function(Toast) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{},
        template:   '<div class="ldgfx-toast" ng-show="displayed" elevation="1" ng-transclude>'+
                        '<fluid-container direction="row" style="height:100%">'+
                            '<div autoalign style="color: #FFFFFF" class="ldgfx-textual-body1">'+
                                '<language vocabulary="toast.message"></language>'+
                            '</div>'+
                            '<fill></fill>'+
                            '<button-flat ng-style="{\'color\': buttonColor}" ng-click="toast.execute();hideToast()" ripple-fixed text="toast.button" autoalign></button-flat>'+
                        '</div>'+
                    '</div>',
        controller: function($scope,$timeout){

            $scope.toast        = Toast;
            $scope.displayed    = false;

            var toastTimeout;



            $scope.$watch('toast.type',function(type){
                $scope.buttonColor = ({
                    'success': '#8bc34a',
                    'warning': '#ffc107', 
                    'error':   '#f44336'
                })[ type ] || '#f44336' ;
            })               


            $scope.$on("toast-display",function(){
                $timeout(function(){
                    $scope.displayed = true;
                    clearTimeout(toastTimeout);                 //Clearing timeout if needed
                    toastTimeout = setTimeout(function(){       //Launching hide timeout
                        $scope.$apply(function(){               //Applying hide
                            $scope.displayed = false;     //Hiding toast
                        })
                    },3000)
                })
            })


            /**
             * @function hideToast
             * Sets the toast parameter "displayed" to false in order to hide the Toast
             */
            $scope.hideToast = function(){
                $scope.toast.displayed = false;     //Updating toast display status
            }

        }
    };
});app.factory('Toast',function($rootScope){

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

});;
app.directive("dttableWidget",function($timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            fetchPage: '&',
            titles: '=',

        },
        template:   
                '<div>'+
                    '<card elevation="1" class="ldgfx-datatable-widget" style="min-width:300px;margin-left:10px;margin-bottom:10px;width:calc(100% - 10px)" fill>'+
                            '<tool-bar class="ldgfx-datatable-widget-header" style="border-bottom:1px solid rgba(0,0,0,.1);border-radius:3px 3px 0 0">'+
                                '<font-icon autoalign style="margin-right:16px;color:rgba(0,0,0,.5)" icon="search"></font-icon>'+
                                '<input ng-model="$scope.querySearch.rowName" type="text" placeholder="Search for Alerts on page" fill>'+
                                '<font-icon autoalign style="margin-right:16px;color:rgba(0,0,0,.5)" clickable="true" icon="file_download"></font-icon>'+
                                '<font-icon autoalign style="color:rgba(0,0,0,.5)" clickable="true" icon="more_vert"></font-icon>'+
                            '</tool-bar>'+
                            '<tool-bar  class="ldgfx-datatable-widget-subheader" style="background:#F9FAFC;border-radius:3px 3px 0 0">'+
                                '<h3 ng-repeat="title in titles" fill autoalign style="font-family:roboto-medium;font-size:14px;text-align:left;">{{ title | uppercase }}</h3>'+
                            '</tool-bar>'+
                            '<perfect-list>'+
                                '<perfect-list-item  class="ldgfx-datatable-widget-item" ng-repeat="columns in data" style="border-top:1px solid rgba(0,0,0,.1);padding-left:16px;padding-right:16px;">'+
                                    '<h3 ng-repeat="row in columns" fill autoalign style="font-size:14px;text-align:left;">{{ row }}</h3>'+
                                '</perfect-list-item>'+
                            '</perfect-list>'+
                            '<tool-bar  class="ldgfx-datatable-widget-footer" style="border-top:1px solid rgba(0,0,0,.1);border-radius: 0 0 3px 3px">'+
                                '<fill></fill>'+
                                '<p style="margin-left:16px;" autoalign>{{ nextPage*10 }} of 1000</p>'+
                                '<font-icon ng-click="displayPage(nextPage - 2)" style="margin-left:16px;" clickable="true" autoalign icon="keyboard_arrow_left"></font-icon>'+
                                '<font-icon ng-click="displayPage(nextPage)" autoalign clickable="true" icon="keyboard_arrow_right"></font-icon>'+
                            '</tool-bar>'+
                        '</card>'+
                    '</div>',
        controller: function($scope){

            $scope.nextPage     = 0;
            $scope.data         = null;
            $scope.querySearch  = {};

            $scope.displayPage = function(page){
                if((page != null) && (page >= 0)){  
                    $scope.fetchPage(page)
                    .then(function(response){
                        $timeout(function(){
                            $scope.data = response.workers;
                            $scope.nextPage = response.nextPage;
                        })
                    }).catch(function(err){
                        console.log(err);
                    })
                }else{
                    alert("no more data");
                }
            }

            $timeout(function(){
                $scope.displayPage(0);
            })

        }
    };
})

app.directive("customWidget",function($timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope:{
            color:'=',
            title:'=',
            icon:'@'
        },
        template:   '<span fill>'+
                        '<card ng-hide="displayedMap" elevation="1" style=" min-width: 256px; margin-left: 10px;margin-bottom: 10px;">'+
                            '<tool-bar ng-style="{ \'background-color\' : color }" style="color:white;border-radius:3px 3px 0 0">'+
                                '<h3 style="color:white;font-family:roboto-medium;" autoalign>{{ title }}</h3>'+
                                '<fill></fill>'+
                                '<font-icon autoalign icon="{{ icon }}"></font-icon>'+
                            '</tool-bar>'+
                            '<div style="width:100%;height:auto;min-height256px;" ng-transclude></div>'+
                        '</card>'+
                    '</span>'
    }
});

app.directive("gaugeWidget",function($timeout) {
    return {
        restrict: 'AE',
        transclude: false,
        replace: true,
        scope:{
            color:'=',
            title:'=',
            unit:'=',
            legend:'=',
            icon:'=',
            min:'=',
            max:'=',
            value:'=',
            active:'=',
            more:'='
        },
        template:   '<span fill>'+
                        '<card elevation="1" style=" min-width: 256px; margin-left: 10px;margin-bottom: 10px;">'+
                            '<tool-bar ng-style="{ \'background-color\' : color }" style="color:white;border-radius:3px 3px 0 0">'+
                                '<h3 style="color:white;font-family:roboto-medium;" autoalign>{{ title }}</h3>'+
                                '<fill></fill>'+
                                '<font-icon autoalign icon="more_vert"></font-icon>'+
                            '</tool-bar>'+
                            '<fluid-container class="ldgfx-widget" direction="column">'+
                                '<gauge-chart style="cursor:pointer;margin:auto;min-height:200px;max-height:200px;min-width:200px;max-width:200px;" fill active="active" value="value" legend="legend" min="min" max="max" settings="{color:color, icon:icon, min:min, max:max, unit:unit, comment:\'good connectivity\' }"></gauge-chart>'+
                                '<div ng-if="more.length > 0" class="ldgfx-widget" ng-show="expanded" style="border-top:1px solid rgba(0,0,0,.1)">'+
                                    '<fluid-container direction="row" style="margin-left:16px;margin-right:16px;" ng-repeat="option in more">'+
                                        '<p fill>{{ option.name }}:</p>'+
                                        '<p>{{ option.value }} {{ option.unit }}</p>'+
                                    '</fluid-container>'+
                                '</div>'+
                                '<tool-bar style="border-top:1px solid rgba(0,0,0,.1)">'+
                                    '<text-button style="color: rgba(0,0,0,.7)" autoalign><language vocabulary="gaugeVoc"></language></text-button autoalign>'+
                                    '<fill></fill>'+
                                    '<font-icon style="color: rgba(0,0,0,.7)" ng-style=" expanded && {\'transform\':\'rotate(180deg)\'}" ng-click="expandWidget()" autoalign clickable="true" icon="expand_more"></font-icon>'+
                                '</tool-bar>'+
                            '</fluid-container>'+
                        '</card>'+
                    '</span>',
        controller: function($scope){

            $scope.expanded = false;
            $scope.gaugeVoc = [
                {lang:"en",text:"view more data"},
                {lang:"fr",text:"plus d'information"}
            ]

            $scope.$watch(function() { 
                //VOID
                //Making sure scope variable are ALL digested on changes
            });

            $scope.expandWidget = function(){
                $scope.expanded = !$scope.expanded;
            }

        }
    }
});