var mysql =  require('mysql');
var db = require("../../config/db.json")
var pool = mysql.createPool({
    connectionLimit : db.connectionLimit,
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    debug    :  false
});

module.exports = {
    executeQuery: function(query, req, res){
        pool.getConnection(function(err,connection){
            if (err) {
                console.log(err);
                res.json({"code" : 100, "status" : "Error in connection database"});
            }   

            console.log('connected as id ' + connection.threadId);
            
            connection.query(query,function(err,result){
                connection.release();
                if(!err) {
                    res.json(result);
                }else{
                    console.log(err);
                    res.json(err);
                }           
            });

            connection.on('error', function(err) {      
                console.log(console.log(err));
                res.json({"code" : 100, "status" : "Error in connection database"});    
            });
        });
    }
}