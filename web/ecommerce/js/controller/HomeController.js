var app = angular.module('web.application');

app.controller('HomeController', function ($scope, $sce, $rootScope, $location, $state, $http, $stateParams, ECommerceLogService, HomeService, NewsService, ProductService, NodeUrl) {
    $rootScope.loaded = true;

    /* BEGIN PROPERTY */
    ECommerceLogService.log("info", "Accessing ECommerce Website...")

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
    
    var showNews = function () {
        $rootScope.loaded = false;
        NewsService.getNews(1).then(function (res) {
            $scope.news = res.data;
            $rootScope.loaded = true;
        });
    }
    
    var showCompanyNews = function(){
        $rootScope.loaded = false;
        $scope.headNews = NewsService.getHeadCompanyNews();
        $rootScope.loaded = true;
    }

    var showCompanyNewsTitles = function(){
        $rootScope.loaded = false;
        $scope.headNewsTitles = NewsService.getCompanyNewsTitles();
        $rootScope.loaded = true;
    }


    /* END PROPERTY */

    /* BEGIN FUNCTION */


    var showProducts = function () {
        $rootScope.loaded = false;

        ProductService.getProductHomePage().then(function (res) {
            $scope.products = res.data;
            $rootScope.loaded = true;
        });
    }

    var countProduct = function () {
        $rootScope.loaded = false;
        ProductService.getProductCountHomePage().then(function (res) {
            $scope.pagination.totalItems = res.data[0].product_count;
            $rootScope.loaded = true;
        });
    }

    var initData = function () {
        countProduct();
        showProducts();
        showNews();
        showCompanyNews();
        showCompanyNewsTitles();
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
app.run(function ($rootScope, $state) {

    $rootScope.sillyQA = function () {
        if ($state.current.name === 'products') {

        }
        $state.go($state.current.name, {}, { reload: true });
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState:   ' + toState.name)
        console.log('fromState: ' + (fromState.name || 'Just got there! click again!'))
    })
});
/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */