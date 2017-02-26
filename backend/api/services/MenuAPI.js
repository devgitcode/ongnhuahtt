var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function(app){

    app.get('/menus', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM menu ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });
    
    app.get('/menus/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM menu WHERE active = ${req.params.active} ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });

    app.get('/menus/menu_type/:type/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM menu WHERE menu_type = ${req.params.type} AND active = ${req.params.active} ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });

    app.get('/submenus/:menu_id/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM submenu WHERE menu_id = ${req.params.menu_id} AND active = ${req.params.active} ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });

    app.get('/submenus/menu_type/:type/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM submenu WHERE menu_type = ${req.params.type} AND active = ${req.params.active} ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });

    app.get('/submenus/:active', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM submenu WHERE active = ${req.params.active} ORDER BY \`order\``;
        log.info("Preparing " + query);
        conn.executeQuery(query, req, res);  
        log.info("Executing " + query);
    });

}