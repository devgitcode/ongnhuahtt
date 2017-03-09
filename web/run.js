var express = require('express');
var bodyParser = require('body-parser');
var server = require('./config/server.json');
var adminLogger = require('./admin/log/Logger');
var ecommerceLogger = require('./ecommerce/log/Logger');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/ecommerce"));
app.use("/admin-cp", express.static(__dirname + "/admin"));
var port = server.port;

var writeLog = function (logger, level, msg) {
    logger.log(level, msg);
}

app.post('/AdminLogService', function (req, res) {
    writeLog(adminLogger, req.body.level, req.body.msg);
    res.send("Update Log: ");
});

app.post('/ECommerceLogService', function (req, res) {
    writeLog(ecommerceLogger, req.body.level, req.body.msg);
    res.send("Update Log");
});

app.listen(port, function () {
    var msg = "";
    if (port == "80") {
        msg = `SERVER IS LISTENNING AT http://${server.host}`;
    } else {
        msg = `SERVER IS LISTENNING AT http://${server.host}:${server.port}`;
    }
    
    writeLog(adminLogger, "info", msg);
    writeLog(ecommerceLogger, "info", msg);
});