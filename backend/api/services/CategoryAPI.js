var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){
    
    app.get('/categories', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = "SELECT * FROM Categories";
        conn.executeQuery(query, req, res);  
        log.info("Get data from Categories " + query);
    });

    app.get('/category/:id', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM Categories WHERE id = ${req.params.id}`;
        conn.executeQuery(query, req, res);  
        log.info("Execute " + query);
    });

    app.post('/category',function(req, res){
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + INSERT thì phải insert CREATED_DATE
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */ 
        var query = "INSERT INTO Categories (`category_name`, `order`, `active`,`created_date`)";
        query += ` VALUES ('${req.body.category_name}', '${req.body.order}', '${req.body.active}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
        conn.executeQuery(query, req, res);  
        log.info("Execute " + query);
    });

    app.put('/category', function(req, res){
        /**
         * QUAN TRỌNG: UPDATE thì phải update UPDATED_DATE
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */ 
        var query = `UPDATE Categories SET category_name = '${req.body.category_name}', \`order\`= '${req.body.order}', active = '${req.body.active}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = ${req.body.id}`
        conn.executeQuery(query, req, res);  
        log.info("Execute " + query);
    });

}