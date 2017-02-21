var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){
    app.get('/users', function(req, res){
         //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = "SELECT * FROM users";
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Get data from Users " + query);
    });

    app.get('/users/:active', function(req, res){
         //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM users WHERE active = '${req.params.active}'`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/users/:username/:active', function(req, res){
         //Tự động trsả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM users WHERE username LIKE '%${req.params.username}%' and active = ${req.params.active}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.post('/users', function(req, res){
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + INSERT thì phải insert USERNAME, PASSWORD, ACTIVE
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */ 
        var query = "INSERT INTO users (`username`, `password`, `fullname`, `active`)";
        log.info("Preparing SQL: " + query);
        query += ` VALUES ('${req.body.username}', '${req.body.password}', '${req.body.fullname}', '${req.body.active}')`;
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/users', function(req, res){
         /**
         * QUAN TRỌNG: UPDATE thì phải update USERNAME, PASSWORD, ACTIVE
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */ 
        var query = `UPDATE users SET password = '${req.body.password}', fullname = '${req.body.fullname}', active = '${req.body.active}' WHERE username = '${req.body.username}'`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.delete('/users', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `DELETE FROM users WHERE username = '${req.body.username}'`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

}