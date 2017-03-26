var mysql =  require('mysql');
var db = require("../../config/db.json")
var log = require('../log/Logger');
var pool = mysql.createPool({
    connectionLimit : db.connectionLimit,
    host: db.host,
    user: db.user,
    port: db.port,
    password: db.password,
    database: db.database,
    debug    :  false
});

module.exports = {
    executeQuery: function(query, req, res){
        pool.getConnection(function(err,connection){
            if (err) {
                console.log(err);
                log.error(err);
                res.json({"code" : 100, "status" : "Error in connection database"});
            }   
            log.info('connected as id ' + connection.threadId);
            connection.query(query,function(err,result){
                connection.release();  
                if(!err) {
                    res.json(result);
                }else{
                    log.error(err);
                    res.json(err);
                }  
                       
            });
            connection.on('error', function(err) { 
                connection.release();             
                log.error(err);
                res.json({"code" : 100, "status" : "Error in connection database"});    
            });
        });
    }
}