var conn = require('../database/DBConnection');

module.exports = function(app){
    app.get('/product_count/:cate_id', function(req, res){
        conn.executeQuery(`SELECT Count(product_id) product_count FROM products WHERE category_id = ${req.params.cate_id}`, req, res);  
    });
    app.get('/products/:cate_id/:min/:limit', function(req, res){
         conn.executeQuery(`SELECT * FROM Products WHERE category_id = ${req.params.cate_id} Order By product_id desc LIMIT ${req.params.min}, ${req.params.limit}`, req, res);  
    });
}