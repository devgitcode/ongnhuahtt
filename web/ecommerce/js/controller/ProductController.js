var app = angular.module('web.application');

app.controller('ProductController', function ($scope, $rootScope, $state, $log, $sce, $http, NodeUrl, $stateParams, ProductService, CategoryService) {

    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 9
    };
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
    var cid = 1;
    if ($stateParams.cid != "init") {
        cid = $stateParams.cid;
    }

    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var showProducts = function () {
        $rootScope.loaded = false;

        getCategory(cid);
        ProductService.getProductsByCateId(cid).then(function (res) {
            $scope.products = res.data;
        });
    }

    var showCategories = function () {
        $rootScope.loaded = false;

        CategoryService.getCategories().then(function (res) {
            $scope.categories = res.data;
            $rootScope.loaded = true;
        });

    }

    var countProduct = function () {
        $rootScope.loaded = false;
        ProductService.getProductCount(cid).then(function (res) {
            $scope.pagination.totalItems = res.data[0].product_count;
            $rootScope.loaded = true;
        });
    }

    var getCategory = function(){
        $rootScope.loaded = false;

        CategoryService.getCategory(cid).then(function(res){
            $scope.selectedCategory = res.data[0];
            $scope.selectedCategory.description = $sce.trustAsHtml($scope.selectedCategory.description);
            $rootScope.loaded = true;
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

    $scope.clickCategory = function(){
        getCategory();
    }

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
