
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