var app = angular.module('web.application');

app.controller('AdminCategoryController', function ($scope, $rootScope, $state, $log, $sce, $http, NodeUrl, $stateParams, AdminCategoryService) {

    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
    $scope.categoryLoaded = false;
    $scope.category = {
        active: 0
    }
    /* END PROPERTY */

    /* BEGIN FUNCTION */


    var showCategories = function () {
        $rootScope.loaded = false;
        AdminCategoryService.getCategories().then(function (res) {
            $scope.categories = res.data;
            $scope.isCategoriesLoaded = true;
        });

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

    $scope.isCategoryAdded = false;
    $scope.addCategory = function(){
        $scope.isCategoryAdded = false;
        
        AdminCategoryService.addCategory($scope.category).then(function (res) {
            $scope.isCategoryAdded = true;
        });
    }


    var initData = function () {
        showCategories();
    }

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */
    initData();



    /* END FUNCTION */

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState:   ' + toState.name)
        console.log('fromState: ' + (fromState.name || 'Just got there! click again!'))
    })
});
