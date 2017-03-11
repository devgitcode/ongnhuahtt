var app = angular.module('web.application');

app.controller('ProductController', function ($scope, $rootScope, $state, $log, $sce, $http, NodeUrl, $stateParams) {

    /* BEGIN PROPERTY */

    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 6
    };
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
    var cid = 1;
    if ($stateParams.cid != "init") {
        cid = $stateParams.cid;
    }

    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var showProducts = function () {
        $http.get(`${NodeUrl}/products/${cid}/0/20`).then(function (res) {
            $scope.products = res.data;
        });
    }
    var showCategories = function () {
        if ($rootScope.categories == undefined) {
            $http.get(`${NodeUrl}/categories`).then(function (res) {
                $scope.categories = res.data;
                $rootScope.categories = $scope.categories
            });
        }    
    }

    // var countProduct = function(){
    //     $http.get(`${NodeUrl}/product_count/${cid}`).then(function(res){
    //         $scope.pagination.totalItems = res.data[0];

    var countProduct = function () {
        $http.get(`${NodeUrl}/product_count/${cid}`).then(function (res) {
            $scope.pagination.totalItems = res.data[0].product_count;
            console.log($scope.pagination.totalItems);
        });
    }

    var initData = function () {
        showCategories();
        countProduct();
        showProducts();
    }

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */
    initData();


    $http.get(`${NodeUrl}/categories/${cid}`).then(function (res) {
        $scope.selectedCategory = res.data[0];
        $scope.selectedCategory.description = $sce.trustAsHtml($scope.selectedCategory.description);
    });

    $scope.setPage = function (pageNo) {
        $scope.pagination.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.pagination.currentPage);
        start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
        showProducts();
    };

    /* END FUNCTION */

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState:   ' + toState.name)
        console.log('fromState: ' + (fromState.name || 'Just got there! click again!'))
    })
});
