app.directive("gaugeChart",function() {
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
});