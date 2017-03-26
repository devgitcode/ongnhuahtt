var app = angular.module('web.application');
app.service('AdminCategoryService', function ($http, NodeUrl) {

    this.getCategories = function () {
        return $http.get(`${NodeUrl}/admin/categories`);
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

});