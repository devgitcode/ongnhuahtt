var mysql =  require('mysql');
var db = require("../../config/db.json")
var connection = mysql.createPool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

module.exports = connection;