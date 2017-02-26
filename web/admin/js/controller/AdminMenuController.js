var app = angular.module('web.application');

app.controller('AdminMenuController', function ($ocLazyLoad, $scope, $log, $http, NodeUrl, $stateParams, $location, AdminLogService) {
    /**
     * Load tất cả Javascript & CSS cho controller
     */
    $ocLazyLoad.load("../dist/js/sb-admin-2.js");
    /* BEGIN PROPERTY */
    AdminLogService.log("info", "Processing AdminMenuController...");
    $scope.menus = [];
    $scope.subMenus = [];

    $http.get(`${NodeUrl}/menus/menu_type/1/1`).then(function (menuRes) {
        $scope.menus = menuRes.data;
        AdminLogService.log("info", "Loaded Admin Menu...");
    });

    $http.get(`${NodeUrl}/submenus/menu_type/1/1`).then(function (subMenuRes) {
        $scope.subMenus = subMenuRes.data;
        AdminLogService.log("info", "Loaded Admin SubMenu...");
    });
    /* END PROPERTY */

    /* BEGIN FUNCTION */



    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */


    /* END FUNCTION */


});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */