var connection = require('../database/DBConnection');

module.exports = function(app){
    app.get('/categories', function(req, res){
         connection.query("SELECT * FROM Categories", function(error, result){
            if(error) throw error;
            console.log("CATEGORIES TABLE: " + result);
            res.send(result);
        });
    });
    app.get('/category/:id', function(req, res){
         connection.query(`SELECT * FROM Categories WHERE id = ${req.params.id}`, function(error, result){
            if(error) throw error;
            console.log("CATEGORIES TABLE: " + result);
            res.json(result);
        });
    });
}