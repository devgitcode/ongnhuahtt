var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){
     app.get('/catalog', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = "SELECT * FROM catalog";
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);  
        log.info("Get data from Catalog " + query);
    });

     app.post('/catalog', function (req, res) {
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = "INSERT INTO catalog(`title`, `url`, `type`, `active`)";       
        query += `VALUES ('${req.body.title}', '${req.body.url}', '${req.body.type}', '${req.body.active}')`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/catalog', function (req, res) {
        /**
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE catalog SET title = '${req.body.title}', url =  '${req.body.url}', type = '${req.body.type}', active = '${req.body.active}' WHERE id = ${req.body.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.delete('/catalog/:id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `DELETE FROM catalog WHERE id = ${req.params.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}