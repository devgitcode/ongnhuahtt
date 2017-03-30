var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');
moment.locale('vi');

module.exports = function (app, number, withoutSuffix, key, isFuture) {


    app.get('/news/:type/:active', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js       
        var query = `SELECT * FROM news WHERE type = ${req.params.type} and active = ${req.params.active}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news/:id', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM news WHERE id = ${req.params.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news/:type_id/:min/:limit', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM news WHERE type = ${req.params.type_id} Order by id asc LIMIT ${req.params.min}, ${req.params.limit}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news_count/:type_id', function(req, res){
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT Count(id) news_count FROM news WHERE type = ${req.params.type_id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
     app.get('/news_mode/:title/:type/:active', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT * FROM news WHERE title LIKE '%${req.params.title}%' and type = ${req.params.type} and active = ${req.params.active}`;
        if(req.params.title == 'all'){
            query = `SELECT * FROM news WHERE type = ${req.params.display_mode} and active = ${req.params.active}`;
        }
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news_mode_count/:title/:type/:active', function (req, res) {
        //Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
        var query = `SELECT count(id) news_count FROM news WHERE title LIKE '%${req.params.title}%' and type = ${req.params.type} and active = ${req.params.active}`;
        if(req.params.title == 'all'){
            query = `SELECT count(id) news_count FROM news WHERE type = ${req.params.type} and active = ${req.params.active}`;
        }
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.get('/news/:type_id/:created_date', function(req, res){
        var query = `SELECT TOP 4 * FROM news WHERE created_date = ${moment().format('YYYY-MM-DD HH:mm:ss')} orderBy created_date desc`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute: " +query);
    });

    app.post('/news', function (req, res) {
        /**
         * Tách ra 2 dòng để build SQL vì xung đột dấu `
         * QUAN TRỌNG: 
         *    + INSERT thì phải insert CREATED_DATE
         *    + Phải chỉ định rõ TÊN CỘT cần insert vào để tránh trường hợp sau này BỔ SUNG THÊM CỘT MỚI BỊ SAI INDEX
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = "INSERT INTO news (`title`,`short_content`,`long_content`,`image`, `type`, `active`, `created_date`)";
        query += `VALUES ('${req.body.title}','${req.body.short_content}','${req.body.long_content}','${req.body.image}', '${req.body.type}', '${req.body.active}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });

    app.put('/news', function (req, res) {
        /**
         * QUAN TRỌNG: UPDATE thì phải update UPDATED_DATE
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE news SET title = '${req.body.title}', short_content = '${req.body.short_content}', long_content = '${req.body.long_content}', image = '${req.body.image}', type = '${req.body.type}', active = '${req.body.active}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = ${req.body.id}`;
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