var app = angular.module('web.application');

app.controller('ContactController', function ($http, $scope, $stateParams, $log, NodeUrl) {
    /* BEGIN PROPERTY */

    var cid = 1;
    if ($stateParams.cid != "init") {
        cid = $stateParams.cid;
    }

    /* END PROPERTY */

    /* BEGIN FUNCTION */

    

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin News
     * */
 

    /* END FUNCTION */
});