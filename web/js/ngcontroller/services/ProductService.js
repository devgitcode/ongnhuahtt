var app = angular.module('web.application');
app.service('ProductService', function($filter){
    this.getNewProducts = function(){
        var products = [
            {id: 1, product_name: "Sản phẩm 1", image: "products-images/p1.jpg", price: "0"},
            {id: 2, product_name: "Sản phẩm 2", image: "products-images/p1.jpg", price: "100000"},
            {id: 3, product_name: "Sản phẩm 3", image: "products-images/p1.jpg", price: "0"},
            {id: 4, product_name: "Sản phẩm 4", image: "products-images/p1.jpg", price: "0"},
            {id: 5, product_name: "Sản phẩm 5", image: "products-images/p1.jpg", price: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0"},
            {id: 10, product_name: "Sản phẩm 10", image: "products-images/p1.jpg", price: "0"},
        ];

        return products;
    }

    this.getProductsByCateId = function(cid){
        var products = [
            {id: 1, product_name: "Sản phẩm 1", image: "products-images/p1.jpg", price: "0", category_id: "1"},
            {id: 2, product_name: "Sản phẩm 2", image: "products-images/p1.jpg", price: "100000", category_id: "1"},
            {id: 3, product_name: "Sản phẩm 3", image: "products-images/p1.jpg", price: "0", category_id: "2"},
            {id: 4, product_name: "Sản phẩm 4", image: "products-images/p1.jpg", price: "0", category_id: "2"},
            {id: 5, product_name: "Sản phẩm 5", image: "products-images/p1.jpg", price: "0", category_id: "2"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 6, product_name: "Sản phẩm 6", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 7, product_name: "Sản phẩm 7", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 8, product_name: "Sản phẩm 8", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 9, product_name: "Sản phẩm 9", image: "products-images/p1.jpg", price: "0", category_id: "0"},
            {id: 10, product_name: "Sản phẩm 10", image: "products-images/p1.jpg", price: "0", category_id: "0"}
        ];

        products = $filter('filter')(products, {category_id: cid}, true);
        return products;
    }
    

    
});