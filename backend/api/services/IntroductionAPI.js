var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){
     app.get('/introduction/:id', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM introduction WHERE id = ${req.params.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);  
        log.info("Get data from Introduction " + query);
    });

     app.post('/introduction', function (req, res) {
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = "INSERT INTO introduction(`content`, `image`, `google_map`)";       
        query += `VALUES ('${req.body.content}', '${req.body.image}', '${req.body.google_map}')`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/introduction', function (req, res) {
        /**
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE introduction SET content = '${req.body.content}', image =  '${req.body.image}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = ${req.body.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.delete('/introduction/:id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `DELETE FROM introduction WHERE id = ${req.params.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}