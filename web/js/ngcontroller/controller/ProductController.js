var app = angular.module('web.application');

app.controller('ProductController',function($scope, $log, $stateParams, $location, ProductService, CategoryService){
    /* BEGIN PROPERTY */
    $scope.categories = CategoryService.getCategories();
    var cid = $scope.categories[0].category_id;
    if($stateParams.cid != "init"){
        cid = $stateParams.cid;
    }
    $scope.selectedCategory = CategoryService.getCategoryById(cid);
    $scope.products = ProductService.getProductsByCateId(cid);
    
    $scope.totalItems = $scope.products.length;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems =$scope.products.length;
    $scope.bigCurrentPage = 1;

   
    /* END PROPERTY */

    /* BEGIN FUNCTION */
    
    /* END FUNCTION */

    
});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */