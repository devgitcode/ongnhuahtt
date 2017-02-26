var app = angular.module('web.application');

app.controller('AdminMenuController', function ($scope, $log, $http, NodeUrl, $stateParams, $location) {
    /* BEGIN PROPERTY */
    $scope.menus = [];
    $http.get(`${NodeUrl}/menus/1`).then(function (menuRes) {
        console
        var menus = menuRes.data;
        for (var i = 0; i < menus.length; i++) {
            var menu = {
                "id": menus[i].id,
                "label": menus[i].label,
                "param": menus[i].param
            }
            $http.get(`${NodeUrl}/submenus/${menus[i].id}/1`).then(function (subMenuRes) {
                menu["submenus"] = subMenuRes.data;
                menus[i].subMenus = subMenus;
            }); 
        }
        $scope.menus = menus;
        console.log( $scope.menus );
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