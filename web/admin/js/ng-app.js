var app = angular.module('web.application', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);
// app.run(function($rootScope, $templateCache) {
//     $rootScope.$on("$stateChangeStart", function() {
//         $templateCache.removeAll();
//     });
// });
app.constant('NodeUrl', "http://localhost:3000");
/**
 * Ghi log lại trên server
 */
app.factory('AdminLogService', function ($http) {
    return {
        log: function (logLevel, logMsg) {
            var data = {
                "level": logLevel,
                "msg": logMsg
            }
            $http.post("/AdminLogService", data).then(function (res) {
                console.log(res.data);
                console.log(data);
            });
        }
    }
});

app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    /**
     * Send request as x-www-form-urlencoded
     */
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }
    // $routeProvider.when('/',{
    //     templateUrl: 'main.html',
    //     controller: 'HomeController',
    //     css: 'css/slider.css'
    // })
    // .when('/grid',{
    //     templateUrl: 'about_us.html'
    // });
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        views: {
            content: {
                template: 'test'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    [
                        "/dist/js/sb-admin-2.js"
                    ]);
            }]
        }
    });


    // $urlRouterProvider.otherwise('/');
});
app.directive("adminSidebar", function(){
    return {
        templateUrl: "admin_sidebar.html"
    }
});