var express = require('express');
var app = express();
app.use("/", express.static(__dirname + "/"));
var port = 80;
app.listen(port, function(){
    console.log("SERVER STARTED AT PORT " + port);
});