var app = angular.module('web.application',['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);
// app.run(function($rootScope, $templateCache) {
//     $rootScope.$on("$stateChangeStart", function() {
//         $templateCache.removeAll();
//     });
// });
app.constant('NodeUrl', "http://localhost:3000");

app.config(function($stateProvider,$urlRouterProvider){
    // $routeProvider.when('/',{
    //     templateUrl: 'main.html',
    //     controller: 'HomeController',
    //     css: 'css/slider.css'
    // })
    // .when('/grid',{
    //     templateUrl: 'about_us.html'
    // });
    $stateProvider.state('dashboard',{
        url: '/dashboard',
        views:{
            content:{
                template: 'test'
            }
        }
    });
   

    $urlRouterProvider.otherwise('/');
});
