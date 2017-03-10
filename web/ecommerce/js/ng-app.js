
var app = angular.module('web.application', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);
// app.run(function($rootScope, $templateCache) {
//     $rootScope.$on("$stateChangeStart", function() {
//         $templateCache.removeAll();
//     });
// });
app.constant('NodeUrl', "http://localhost:3000");
app.factory('ECommerceLogService', function ($http) {
    return {
        log: function (logLevel, logMsg) {
            var data = {
                "level": logLevel,
                "msg": logMsg
            }
            $http.post("/ECommerceLogService", data).then(function (res) {
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
    
    // $routeProvider.when('/',{
    //     templateUrl: 'main.html',
    //     controller: 'HomeController',
    //     css: 'css/slider.css'
    // })
    // .when('/grid',{
    //     templateUrl: 'about_us.html'
    // });

    $stateProvider.state('homepage', {
        url: '/',

        views: {
            content: {
                templateUrl: 'main.html',
                controller: 'HomeController'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    [
                        "css/font-awesome.css"
                    ]);
            }]
        }
    })
    $stateProvider.state('products', {
        params: { reload: true }, //add reload param to a view you want to reload
        url: '/products/:cid',
        views: {
            content: {
                templateUrl: 'products.html',
                controller: 'ProductController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css', 'css/owl.theme.css', 'css/style.css', 'js/jquery.min.js', 'js/parallax.js', 'js/common.js', 'js/owl.carousel.min.js']);
            }]
        }
    });
    $stateProvider.state('product_detail', {
        url: '/products/:cid/:pid',
        views: {
            content: {
                templateUrl: 'product_detail.html'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css','css/owl.theme.css','css/flexslider.css','css/fancybox.css','css/font-awesome.css','js/prototype.js', 'js/jquery.min.js','js/common.js', 'js/owl.carousel.min.js','js/toggle.js','js/pro-img-slider.js','js/jquery.flexslider.js', 'js/cloud-zoom.js']);
            }]
        }
    });

    $stateProvider.state('catalogue', {
        url: '/catalogue',
        views: {
            content: {
                templateUrl: 'catalogue.html',
                controller: 'CatalogueController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css', 'css/owl.theme.css', 'css/style.css', 'js/jquery.min.js', 'js/parallax.js', 'js/common.js', 'js/owl.carousel.min.js']);
            }]
        }
    });

    $stateProvider.state('news', {
        url: '/news/:ntype',
        views: {
            content: {
                templateUrl: 'news.html',
                controller: 'NewsController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css', 'css/owl.theme.css', 'css/style.css', 'js/jquery.min.js', 'js/parallax.js', 'js/common.js', 'js/owl.carousel.min.js']
                );
            }]
        }
    });
    $stateProvider.state('introduction', {
        url: '/introduction/:introid',
        views: {
            content: {
                templateUrl: 'introduction.html',
                controller: 'IntroductionController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css', 'css/owl.theme.css', 'css/style.css', 'js/jquery.min.js', 'js/parallax.js', 'js/common.js', 'js/owl.carousel.min.js']
                );
            }]
        }
    });
    $stateProvider.state('contact', {
        url: '/contact/:cid',
        views: {
            content: {
                templateUrl: 'contact.html',
                controller: 'ContactController'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    ['css/owl.carousel.css', 'css/owl.theme.css', 'css/style.css', 'js/jquery.min.js', 'js/parallax.js', 'js/common.js', 'js/owl.carousel.min.js']
                );
            }]
        }
    });
    $urlRouterProvider.otherwise('/');
});



app.directive('drtBrandLogo', function () {
    return {
        templateUrl: 'brand_logo.html'
    }
});

app.directive('drtNewArrival', function () {
    app.directive('drtHomeProduct', function () {
        return {
            templateUrl: 'home_product.html'
        }
    });
})
