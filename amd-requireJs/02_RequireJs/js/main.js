(function () {
    requirejs.config({
        baseUrl:'js/',//基本路径
        paths:{//配置路径
            alerter:'./modules/alerter',
            dataService:'./modules/dataService',
            jquery:'./libs/jquery-3.3.1.min',
            angular:'./libs/angular.min'
        },
        shim:{
            angular: {
                exports:'angular'
            }
        }
    });
    requirejs(['alerter','angular'],function (alerter,angular) {
        alerter.showMsg()
        console.log(angular)
    })
})();
