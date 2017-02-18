var connection = require('../database/DBConnection');

module.exports = function(app){
    app.get('/product_count/:cate_id', function(req, res){
         connection.query(`SELECT Count(product_id) product_count FROM products WHERE category_id = ${req.params.cate_id}`, function(error, result){
            if(error) throw error;
            console.log("CATEGORIES TABLE: " + result);
            res.json(result);
        });
    });
    app.get('/products/:cate_id/:min/:limit', function(req, res){
         connection.query(`SELECT * FROM Products WHERE category_id = ${req.params.cate_id} Order By product_id desc LIMIT ${req.params.min}, ${req.params.limit}`, function(error, result){
            if(error) throw error;
            console.log("PRODUCTS TABLE: " + result);
            res.json(result);
        });
    });
}