var app = angular.module('web.application');

app.controller('AdminCategoryController', function ($scope, $rootScope, $state, $log, $sce, $window, $http, $element, NodeUrl, $stateParams, AdminCategoryService) {

    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
    $scope.categoryLoaded = false;
    $scope.category = {
        active: 0
    }
    $scope.keyword = "";

    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 10
    };
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
    $scope.start = start;
    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var countCategories = function () {
        AdminCategoryService.countCategories().then(function (res) {
            $scope.pagination.totalItems = res.data[0].cate_count;
        });
    }

    var showCategories = function () {
        $scope.isCategoriesLoaded = false;
        if ($scope.keyword.length > 0) {
            AdminCategoryService.countSearchCategories($scope.keyword).then(function (res) {
                $scope.pagination.totalItems = res.data[0].cate_count;
            });
            AdminCategoryService.searchCategories($scope.keyword, start, $scope.pagination.itemsPerPage).then(function (res) {
                $scope.categories = res.data;
                $scope.isCategoriesLoaded = true;
            });
        } else {
            countCategories();
            AdminCategoryService.getCategories(start, $scope.pagination.itemsPerPage).then(function (res) {
                $scope.categories = res.data;
                $scope.isCategoriesLoaded = true;
            });
        }


    }

    $scope.searchCategories = function () {
        goToFirstPage();
        showCategories();
    }

    var goToFirstPage = function () {
        $scope.pagination.currentPage = 1;
        $scope.pageChanged();
    }

    $scope.getCategory = function (cid) {
        $scope.category = null;
        $scope.categoryLoaded = false;
        AdminCategoryService.getCategory(cid).then(function (res) {
            $scope.category = res.data[0];
            $scope.categoryLoaded = true;
        });
    }


    $scope.getDescription = function (id) {
        $scope.descriptionObject = null;
        AdminCategoryService.getDescription(id).then(function (res) {
            $scope.descriptionObject = res.data[0];
        });
    };

    $scope.showDeleteModal = function (category) {
        $scope.category = category;
        showDeleteModal(category);
    }

    $scope.deleteCategory = function () {
        AdminCategoryService.deleteCategory($scope.category.id).then(function (res) {
            $window.btnDeleteNo.click();
            showCategories();
        });
    }

    $scope.isCategoryAdded = false;
    $scope.addCategory = function () {
        $scope.isCategoryAdded = false;
        AdminCategoryService.addCategory($scope.category).then(function (res) {
            $scope.isCategoryAdded = true;
            goToFirstPage();
            showCategories();

        });
        $scope.category = null;
    }

    $scope.updateCategory = function () {
        AdminCategoryService.updateCategory($scope.category).then(function (res) {
            showCategories();
        });
        $scope.category = null;
    }


    var initData = function () {
        countCategories();
        showCategories();
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
        showCategories();
    };


    /* END FUNCTION */


});
