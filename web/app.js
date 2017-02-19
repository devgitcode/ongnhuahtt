var express = require('express');
var server = require('./config/server.json');
var app = express();
app.use("/", express.static(__dirname + "/ecommerce"));
app.use("/admin", express.static(__dirname + "/admin"));
var port = server.port;
app.listen(port, function(){
    if(port == "80"){
        console.log(`SERVER IS LISTENNING AT http://${server.host}`);
    }else{
        console.log(`SERVER IS LISTENNING AT http://${server.host}:${server.port}`);
    }
});