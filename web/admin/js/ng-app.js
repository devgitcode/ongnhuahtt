var app = angular.module('web.application', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);
// app.run(function($rootScope, $templateCache) {
//     $rootScope.$on("$stateChangeStart", function() {
//         $templateCache.removeAll();
//     });
// });
app.filter('unsafe', function ($sce) { return $sce.trustAsHtml; });
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
                templateUrl: 'dashboard.html'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    [
                        '../vendor/metisMenu/metisMenu.min.js'
                    ]);
            }]
        }
    });

    $stateProvider.state('category_add', {
        url: '/category-add',
        views: {
            content: {
                templateUrl: 'category/category-add.html'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    [
                        '../vendor/metisMenu/metisMenu.min.js'
                    ]);
            }]
        }
    });

    $stateProvider.state('category', {
        url: '/category',
        views: {
            content: {
                templateUrl: 'category/category-management.html',
                controller: 'AdminCategoryController'
            }
        },
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load(
                    [
                        '../vendor/jquery/jquery.min.js',
                        '../vendor/metisMenu/metisMenu.min.js',
                        '../vendor/bootstrap/js/bootstrap.min.js',

                    ]);
            }]
        }
    });

    console.log('LOD')

});

/* BEGIN NEW DIRECTIVE */
app.directive("loading", function () {
    return {
        template: `<div class="text-center">
                <img src="../images/loading.gif" />
                <h1 class="">ĐANG TẢI...</1>
            </div>`
    }
});

app.directive("contentLoading", function () {
    return {
        template: `<div class="text-center">
                <img width="30" src="../images/loading.gif" />
                <h3 class="">Đang tải nội dung...</3>
            </div>`
    }
});

app.directive("contentLoadingInline", function () {
    return {
        template: `<span>Đang tải nội dung <img width="30" src="../images/loading.gif" /></span>`
    }
});

app.directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);
            if (!ngModel) return;
            ck.on('instanceReady', function () {
                ck.setData(ngModel.$viewValue);
            });
            function updateModel() {
                scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            }
            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);

            ngModel.$render = function (value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    }
});

/* END NEW DIRECTIVE */
