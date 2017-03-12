var app = angular.module('web.application');
app.service('ProductService', function($http, NodeUrl){
    this.getProductsByCateId = function(cid){
        return $http.get(`${NodeUrl}/products/${cid}/0/20`);
    }

    this.getProductCount = function(cid){
        return $http.get(`${NodeUrl}/product_count/${cid}`)
    }
    
    this.getProductHomePage = function(){
        return $http.get(`${NodeUrl}/products_mode/all/1/1`);
    }

    this.getProductCountHomePage = function(){
        return $http.get(`${NodeUrl}/product_mode_count/all/1/1`);
    }
    
});