var app = angular.module('web.application');
app.service('AdminProductService', function ($http, NodeUrl) {

    this.getItems = function (start, limit) {
        return $http.get(`${NodeUrl}/admin/products/limit/${start}/${limit}`);
    }

    this.countItems = function () {
        return $http.get(`${NodeUrl}/admin/products/count`);
    }

    this.getItem = function (cid) {
        return $http.get(`${NodeUrl}/admin/products/${cid}`);
    }

    this.getDescription = function(itemId){
        return $http.get(`${NodeUrl}/admin/products/getDescription/${itemId}`);
    }

    this.addItem = function(category){
         return $http.post(`${NodeUrl}/admin/products`, category);
    }

    this.deleteItem= function(cid){
         return $http.delete(`${NodeUrl}/admin/products/${cid}`);
    }

    this.updateItem = function(category){
        return $http.put(`${NodeUrl}/admin/products`, category);
    }

    this.searchItems = function(keyword,start, limit){
        return $http.get(`${NodeUrl}/admin/products/search/${keyword}/${start}/${limit}`);
    }

    this.countSearchItems = function (keyword) {
        return $http.get(`${NodeUrl}/admin/products/count/search/${keyword}`);
    }

});