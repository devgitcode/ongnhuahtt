var app = angular.module('web.application');

app.controller('NewsController', function ($rootScope, $scope, $log, $http, NodeUrl, $stateParams, NewsService) {
    /* BEGIN PROPERTY */
    $rootScope.loaded = false;
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
        $rootScope.loaded = false;
        
        NewsService.getNews(ntype).then(function (res) {
            $scope.news = res.data;
            $rootScope.loaded = true;
        });
    }

    var showNewLimit = function () {
        $rootScope.loaded = false;
        NewsService.getNewsLimit(ntype,0,6).then(function (res) {
            $scope.news = res.data;
            $rootScope.loaded = true;
        });
    }


    var newCount = function(){
        $rootScope.loaded = false;
        NewsService.getNewsCount(ntype).then(function(res){
            $scope.pagination.totalItems = res.data[0].news_count;
            $rootScope.loaded = true;
        });
    }

    var initData = function () {
        newCount();
        showNews();        
        showNewLimit();
    }

    initData();

    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin News
     * */
    // $http.get(`${NodeUrl}/news/${ntype}`).then(function (res) {
    //     $scope.selectedNews = res.data[0].records;
    // });

    $scope.setPage = function (pageNo) {
        $scope.pagination.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.pagination.currentPage);
        start = ($scope.pagination.currentPage - 1) * $scope.pagination.itemPerPage;
        showNews();
    };
    /* END FUNCTION */
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState:   ' + toState.name)
        console.log('fromState: ' + (fromState.name || 'Just got there! click again!'))
    })
});