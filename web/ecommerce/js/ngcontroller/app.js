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
    $stateProvider.state('homepage',{
        url: '/',
        
        views:{
            content:{
                templateUrl: 'main.html',
                controller: 'HomeController'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load(
                [
                    
                    "css/font-awesome.css"
                    
                    
                ]);
            }]
        }
    })
    $stateProvider.state('products',{
        url: '/products/:cid',
        views:{
            content:{
                templateUrl: 'products.html',
                controller: 'ProductController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load(
                ['css/owl.carousel.css','css/owl.theme.css','css/style.css','js/jquery.min.js','js/parallax.js','js/common.js','js/owl.carousel.min.js']);
            }]
        }
    });

    $stateProvider.state('catalogue', {
        url: '/catalogue',
        views:{
            content:{
                templateUrl: 'catalogue.html',
                controller: 'CatalogueController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load(
                ['css/owl.carousel.css','css/owl.theme.css','css/style.css','js/jquery.min.js','js/parallax.js','js/common.js','js/owl.carousel.min.js']);
            }]
        }
    });

    $urlRouterProvider.otherwise('/');
});

app.directive('drtBrandLogo',function(){
    return {
        templateUrl: 'brand_logo.html'
    }
});

app.directive('drtNewArrival',function(){
    return {
        templateUrl: 'new_arrival.html'
    }
});