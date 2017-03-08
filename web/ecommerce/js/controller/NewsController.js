var app = angular.module('web.application');

app.controller('NewsController', function ($scope, $log, $http, NodeUrl, $stateParams) {
    /* BEGIN PROPERTY */
    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 6
    };
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
   
    var ntype = 1;
    if ($stateParams.ntype != "init") {
        ntype = $stateParams.ntype;
    }

    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var showNews = function () {
        $http.get(`${NodeUrl}/news/${ntype}/1`).then(function (res) {
            $scope.news = res.data;
        });
    }

    var shownewLimit = function () {
        $http.get(`${NodeUrl}/news/${ntype}/0/10`).then(function (res) {
            $scope.news = res.data;
        });
    }


    var newCount = function(){
        $http.get(`${NodeUrl}/news_count/${ntype}`).then(function(res){
            $scope.pagination.totalItems = res.data[0];
            console.log($scope.pagination.totalItems);
        });
    }

    var initData = function () {
        showNews();
        newCount();
        shownewLimit();
    }

    initData();

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin News
     * */
    $http.get(`${NodeUrl}/news/${ntype}`).then(function (res) {
        $scope.selectedNews = res.data[0].records;
    });

    // $scope.setPage = function (pageNo) {
    //     $scope.pagination.currentPage = pageNo;
    // };

    // $scope.pageChanged = function () {
    //     $log.log('Page changed to: ' + $scope.pagination.currentPage);
    //     start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
    //     showNews();
    // };
    /* END FUNCTION */
});