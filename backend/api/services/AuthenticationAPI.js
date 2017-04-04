var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){
    app.post('/authenticate', function(req, res){
         //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT count(username) user_count FROM users where active = 1 and username = '${req.body.username}' and password = '${req.body.password}'`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Get data from Users " + query);
    });

}