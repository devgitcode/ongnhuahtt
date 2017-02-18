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

    app.post('/category',function(req, res){
        connection.query(`INSERT INTO Categories VALUES(null, '${req.body.category_name}', ${req.body.order})`, function(error, result){
            if(error) throw error;
            res.send(result);
        });
    });

    app.put('/category', function(req, res){
        connection.query(`UPDATE Categories SET category_name = '${req.body.category_name}', \`order\`= ${req.body.order} WHERE id = ${req.body.id}`, function(error, result){
            if(error) throw error;
            res.send(result);
        });
    });

}