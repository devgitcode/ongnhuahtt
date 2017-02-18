var app = angular.module('web.application');
app.service('CategoryService', function($filter){
    var categories = [
            {id: "0", category_name: "Ống CPVC",order: "0"},
            {id: "2", category_name: "VAN ĐỒNG",order: "2"},
            {id: "3", category_name: "VAN KIM LOẠI",order: "3"},
            {id: "4", category_name: "VAN GANG",order: "4"},
            {id: "5", category_name: "ỐNG KIM LOẠI",order: "1"},
            {id: "6", category_name: "THIẾT BỊ PCCC",order: "5"},
            {id: "7", category_name: "BỒN CHỨA NƯỚC",order: "5"},
            {id: "8", category_name: "CHẬU RỬA",order: "6"},
            {id: "9", category_name: "PHỤ KIỆN BÌNH MINH",order: "5"},
        ];
    this.getCategories = function(){
        return categories;
    }

   this.getCategoryById = function(cid){
       var obj = $filter('filter')(categories, {id: cid}, true)[0];
       if(obj == null){
           obj = categories[0];
       }

        return obj;
   }
    
});