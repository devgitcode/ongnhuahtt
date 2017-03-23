var app = angular.module('web.application');

app.controller('AdminMenuController', function ($ocLazyLoad, $scope, $rootScope, $log, $http, NodeUrl, $stateParams, $location, AdminLogService) {
    /**
     * Load tất cả Javascript & CSS cho controller
     */
    $rootScope.loaded = false;

    /* BEGIN PROPERTY */
    AdminLogService.log("info", "Processing AdminMenuController...");
    $scope.menus = [];
    $scope.subMenus = [];

    $http.get(`${NodeUrl}/menus/menu_type/1/1`).then(function (menuRes) {
        $scope.menus = menuRes.data;
        // AdminLogService.log("info", "Loaded Admin Menu...");
        $rootScope.loaded = true;
    });

    $http.get(`${NodeUrl}/submenus/menu_type/1/1`).then(function (subMenuRes) {
       
        $scope.subMenus = subMenuRes.data;
        // AdminLogService.log("info", "Loaded Admin SubMenu...");
        $rootScope.loaded = true;
    });
    /* END PROPERTY */

    /* BEGIN FUNCTION */



    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */


    /* END FUNCTION */
    $ocLazyLoad.load(['../vendor/metisMenu/metisMenu.min.css','../dist/css/sb-admin-2.css','../vendor/jquery/jquery.min.js','../vendor/metisMenu/metisMenu.min.js','../dist/js/sb-admin-2.js']);

}).directive("adminSideBar", function () {
    return {
        templateUrl: "side-menu.html"
    }
});
/* END NEW DIRECTIVE */