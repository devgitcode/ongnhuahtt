var express = require('express');
var server = require('./server.json');
var app = express();
app.use("/", express.static(__dirname + "/"));
var port = server.port;
app.listen(port, function(){
    if(port == "80"){
        console.log(`SERVER IS LISTENNING AT http://${server.host}`);
    }else{
        console.log(`SERVER IS LISTENNING AT http://${server.host}:${server.port}`);
    }
});