var app = angular.module('web.application');
app.service('CategoryService', function ($http, NodeUrl) {

    this.getCategories = function () {
        return $http.get(`${NodeUrl}/categories`);
    }

    this.getCategory = function (cid) {
        return $http.get(`${NodeUrl}/categories/${cid}`)
    }

});