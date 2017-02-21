var conn = require('../database/DBConnection');
var log = require('../log/Logger');

module.exports = function (app) {
    app.put('/contact', function (req, res) {
        /**        
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE contact SET content = '${req.body.content}', google_map =  '${req.body.google_map}' WHERE id = ${req.body.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}