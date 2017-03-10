var app = angular.module('web.application');

app.controller('HomeController', function ($scope, $sce, $location, $state, $http, $stateParams, ECommerceLogService, HomeService, NewsService, NodeUrl) {
   

    /* BEGIN PROPERTY */
    ECommerceLogService.log("info","Accessing ECommerce Website...")

    $scope.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 8
    };
    var start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;

    //Company Info

    $scope.companyInfo = {
        content: $sce.trustAsHtml(HomeService.getCompanyInfo().content)
    }

    $scope.homeClick = function () {
        $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: true
        });
    }
    //Menu

    $scope.menus = HomeService.getMenus();

    //Footer

    $scope.footerInfo = $sce.trustAsHtml(HomeService.getFooterInfo());

    //Tin Tức Panel
    $scope.news = NewsService.getNews();
    $scope.headNews = NewsService.getHeadCompanyNews();
    $scope.headNewsTitles = NewsService.getCompanyNewsTitles();

    /* END PROPERTY */

    /* BEGIN FUNCTION */

    var showProducts = function () {
        $http.get(`${NodeUrl}/products_mode/all/1/1`).then(function (res) {
            $scope.products = res.data;
            console.log($scope.products);
        });
    }

    var countProduct = function () {
        $http.get(`${NodeUrl}/product_mode_count/all/1/1`).then(function (res) {
            $scope.pagination.totalItems = res.data[0].product_count;
            console.log($scope.pagination.totalItems);
        });
    }

    var initData = function () {
        countProduct();
        showProducts();
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
        start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
        showProducts();
    };

    /* END FUNCTION */


});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */