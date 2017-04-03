var app = angular.module('web.application');
app.service('AdminCategoryService', function ($http, NodeUrl) {

    this.getCategories = function (start, limit) {
        return $http.get(`${NodeUrl}/admin/categories/limit/${start}/${limit}`);
    }

    this.countCategories = function () {
        return $http.get(`${NodeUrl}/admin/categories/count`);
    }

    this.getCategory = function (cid) {
        return $http.get(`${NodeUrl}/admin/categories/${cid}`);
    }

    this.getDescription = function(cid){
        return $http.get(`${NodeUrl}/admin/categories/getDescription/${cid}`);
    }

    this.addCategory = function(category){
         return $http.post(`${NodeUrl}/admin/categories`,category);
    }

    this.deleteCategory = function(cid){
         return $http.delete(`${NodeUrl}/admin/categories/${cid}`);
    }

});