var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function (app) {
    app.get('/product_count/:cate_id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT Count(product_id) product_count FROM products WHERE category_id = ${req.params.cate_id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/products/:cate_id/:min/:limit', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM products WHERE category_id = ${req.params.cate_id} Order By product_id desc LIMIT ${req.params.min}, ${req.params.limit}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    // app.get('/products/:active', function (req, res) {
    //     //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
    //     var query = `SELECT * FROM products WHERE active = ${req.params.active}`;
    //     log.info("Preparing SQL: " + query);
    //     conn.executeQuery(query, req, res);
    //     log.info("Execute " + query);
    // });

    app.get('/products/:product_name/:active', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\"database\DBConnection.js
        var query1 = `SELECT * FROM products WHERE product_name LIKE '%${req.params.product_name}%' and active = ${req.params.active}`;
        log.info("Preparing SQL: " + query1);
        conn.executeQuery(query1, req, res);
        log.info("Execute " + query1);
    });

    // app.get('/products/:product_name/:display_mode/:active', function (req, res) {
    //     //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
    //     var query2 = `SELECT * FROM products WHERE product_name LIKE '%${req.params.product_name}%' and display_mode = ${req.params.display_mode} and active = ${req.params.active}`;
    //     log.info("Preparing SQL: " + query2);
    //     conn.executeQuery(query2, req, res);
    //     log.info("Execute " + query2);
    // });

    app.post('/products', function (req, res) {
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + INSERT thì phải insert CREATED_DATE
         *    + INSERT thì phải insert display_mode để xem sản phẩm được hiện ở bao nhiêu trang
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = "INSERT INTO products(`product_name`, `image`, `image_list`,`description`, `price`, `active`, `display_mode`, `category_id`, `created_date`)";       
        query += `VALUES ('${req.body.product_name}', '${req.body.image}', '${req.body.image_list}', '${req.body.description}', '${req.body.price}', '${req.body.active}', '${req.body.display_mode}', '${req.body.category_id}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/products', function (req, res) {
        /**
         * QUAN TRỌNG: UPDATE thì phải update UPDATED_DATE
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE products SET product_name = '${req.body.product_name}', image = '${req.body.image}', image_list = '${req.body.image_list}', description =  '${req.body.description}', price = '${req.body.price}', active = '${req.body.active}', display_mode = '${req.body.display_mode}', category_id = '${req.body.category_id}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE product_id = ${req.body.product_id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.delete('/products/:product_id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `DELETE FROM products WHERE product_id = ${req.params.product_id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}