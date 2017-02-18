var app = angular.module('web.application');

app.controller('HomeController',function($scope, $sce, $location,$state,$stateParams, HomeService, NewsService){
    /* BEGIN PROPERTY */

    //Company Info
   
    $scope.companyInfo = {
        content: $sce.trustAsHtml(HomeService.getCompanyInfo().content)
    }
    
    $scope.homeClick = function(){
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
    
    /* END FUNCTION */

    
});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */