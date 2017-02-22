var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){

    app.get('/news/:title/:type/:active', function(req, res){
         //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         var query = `SELECT * FROM news WHERE title LIKE '%${req.params.title}%' and type = ${req.params.type} and active = ${req.params.active}`;
         log.info("Preparing SQL: " + query);
         conn.executeQuery(query, req, res);
         log.info("Execute " + query);
    });

    app.get('/news/:type/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM news WHERE type = ${req.params.type} and active = ${req.params.active}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news/:title', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM news WHERE title LIKE '%${req.params.title}%'`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.post('/news', function (req, res) {
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + INSERT thì phải insert CREATED_DATE
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = "INSERT INTO news (`title`, `content`, `type`, `active`, `created_date`)";       
        query += `VALUES ('${req.body.title}', '${req.body.content}', '${req.body.type}', '${req.body.active}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/news', function (req, res) {
        /**
         * QUAN TRỌNG: UPDATE thì phải update UPDATED_DATE
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE news SET title = '${req.body.title}', content =  '${req.body.content}', type = '${req.body.type}', active = '${req.body.active}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = ${req.body.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.delete('/news/:id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `DELETE FROM news WHERE id = ${req.params.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}