var app = angular.module('web.application');

app.controller('AdminProductController', function ($scope, $rootScope, $state, $log, $sce, $window, $http, $element, NodeUrl, $stateParams, AdminCategoryService, AdminProductService) {

    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
    $scope.isItemsLoaded = false;
    $scope.item = {
        active: 0
    }
    $scope.keyword = "";
    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 5
    };

    $scope.categories;
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
    $scope.start = start;
    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var countItems = function () {
        AdminProductService.countItems().then(function (res) {
            $scope.pagination.totalItems = res.data[0].item_count;
        });
    }

    var showItems = function () {
        $scope.isItemsLoaded = false;
        if ($scope.keyword.length > 0) {
            AdminProductService.countSearchItems($scope.keyword).then(function (res) {
                $scope.pagination.totalItems = res.data[0].item_count;
            });
            AdminProductService.searchItems($scope.keyword, start, $scope.pagination.itemsPerPage).then(function (res) {
                $scope.items = res.data;
                $scope.isItemsLoaded = true;
                $rootScope.loaded = true;
            });
        } else {
            countItems();
            AdminProductService.getItems(start, $scope.pagination.itemsPerPage).then(function (res) {
                $scope.items = res.data;
                $scope.isItemsLoaded = true;
                $rootScope.loaded = true;
            });
        }


    }

    $scope.searchItems = function () {
        goToFirstPage();
        showItems();
    }

    var goToFirstPage = function () {
        $scope.pagination.currentPage = 1;
        $scope.pageChanged();
    }

    $scope.getItem = function (cid) {
        $scope.category = null;
        $scope.categoryLoaded = false;
        AdminProductService.getCategory(cid).then(function (res) {
            $scope.category = res.data[0];
            $scope.categoryLoaded = true;
        });
    }


    $scope.getDescription = function (id) {
        $scope.descriptionObject = null;
        AdminProductService.getDescription(id).then(function (res) {
            $scope.descriptionObject = res.data[0];
        });
    };

    $scope.showDeleteModal = function (item) {
        $scope.item = item;
        showDeleteModal(item);
    }

    $scope.deleteItem = function () {
        AdminProductService.deleteItem($scope.item.product_id).then(function (res) {
            $window.btnDeleteNo.click();
            showItems();
        });
    }

    $scope.isCategoryAdded = false;
    $scope.addItem= function () {
        $scope.isCategoryAdded = false;
        AdminProductService.addCategory($scope.category).then(function (res) {
            $scope.isCategoryAdded = true;
            goToFirstPage();
            showCategories();

        });
        $scope.category = {
            active: 0
        }
    }

    $scope.updateItem = function () {
        AdminCategoryService.updateCategory($scope.category).then(function (res) {
            showCategories();
        });
        $scope.category = {
            active: 0
        }
    }

    $scope.isAddPageLoaded = false;
    $scope.initAddPage = function(){
        $scope.isAddPageLoaded = false;
        AdminCategoryService.countCategories().then(function(res){
            AdminCategoryService.getCategories(0, res.data[0].cate_count).then(function(response){
                $scope.categories = response.data;
                $scope.isAddPageLoaded = true;
            });
        });
    }


    var initData = function () {
        countItems();
        showItems();
    }

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */
    initData();

    $scope.setPage = function (pageNo) {
        $scope.pagination.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.pagination.currentPage);
        start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
        $scope.start = start;
        console.log(start);
        showItems();
    };


    /* END FUNCTION */


});
