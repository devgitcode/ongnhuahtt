var express = require('express');
var app = express();
app.use("/", express.static(__dirname + "/"));
app.listen(80, function(){
    console.log("SERVER STARTED AT PORT 3005");
});