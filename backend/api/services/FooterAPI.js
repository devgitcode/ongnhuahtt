var conn = require('../database/DBConnection');
var log = require('../log/Logger');
//Thêm thư viện này để hỗ trợ format Ngày
var moment = require('moment');

module.exports = function (app) {
    app.put('/footer', function (req, res) {
        /**        
         * Tự động trả về kiểu JSON ra Browser. Code này đã được viết trong file backend\api\database\DBConnection.js
         */
        var query = `UPDATE footer SET company_name = '${req.body.company_name}', address =  '${req.body.address}', phone =  '${req.body.phone}', fax =  '${req.body.fax}', hotline =  '${req.body.hotline}', email =  '${req.body.email}', updated_date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = ${req.body.id}`;
        log.info("Preparing SQL: " + query);
        conn.executeQuery(query, req, res);
        log.info("Execute " + query);
    });
}