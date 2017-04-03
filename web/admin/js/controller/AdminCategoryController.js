var app = angular.module('web.application');

app.controller('AdminCategoryController', function ($scope, $rootScope, $state, $log, $sce, $http, $element, NodeUrl, $stateParams, AdminCategoryService) {

    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
    $scope.categoryLoaded = false;
    $scope.category = {
        active: 0
    }
    
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
        AdminCategoryService.getCategories(start, $scope.pagination.itemsPerPage).then(function (res) {
            $scope.categories = res.data;
            console.log($scope.pagination.totalItems);
            $scope.isCategoriesLoaded = true;
        });

    }

    var goToFirstPage = function(){
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

    $scope.deleteCategory = function(id){
        AdminCategoryService.deleteCategory(id).then(function (res) {
            console.log('Deleted');
            showCategories();
        });
    }

    $scope.isCategoryAdded = false;
    $scope.addCategory = function(){
        $scope.isCategoryAdded = false;
        AdminCategoryService.addCategory($scope.category).then(function (res) {
            $scope.isCategoryAdded = true;
            goToFirstPage();
            showCategories();
            
        });
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
