var app = angular.module('web.application');

app.controller('IntroductionController',function($scope, $log,$http, NodeUrl, $stateParams){
    /* BEGIN PROPERTY */

 
    var introid = 1;
    if($stateParams.introid != "init"){
        introid = $stateParams.introid;
    }
   
     var ntype = 1;
    /* END PROPERTY */

    /* BEGIN FUNCTION */    

    var showIntroduction = function(){
        $http.get(`${NodeUrl}/introduction/${introid}`).then(function(res){
            $scope.introduction = res.data;
        });
    }
    
    var showNew = function(){
        $http.get(`${NodeUrl}/news/${ntype}/1`).then(function(res){
            $scope.news = res.data;
        });
    }
    var initData = function(){
        showIntroduction();
        showNew();
    }
   
    /**
     *  Load các dữ liệu khởi tạo trên trang
     * + Thông tin Products
     * */
    initData();
    
   
    $http.get(`${NodeUrl}/news/${ntype}`).then(function(res){
        $scope.selectedNews = res.data[0];
    });  

    /* END FUNCTION */

    
});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */