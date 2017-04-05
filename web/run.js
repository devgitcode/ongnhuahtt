var express = require('express');
var bodyParser = require('body-parser');
var server = require('./config/server.json');
var adminLogger = require('./admin/log/Logger');
var ecommerceLogger = require('./ecommerce/log/Logger');
var requestModule = require('request');
var crypto = require('crypto');
var md5sum = crypto.createHash('md5');
var app = express();
var session = require("express-session");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "Shh, its a secret!"}));
app.use("/login", express.static(__dirname + "/admin/pages/login"));
app.use("/admin-cp/*",function(req, res, next){
    
    if(req.session.user == null){
        req.session.requestUrl = req.url;
        res.redirect('/login');
    }
    next();
});
app.use("/", express.static(__dirname + "/ecommerce"));
app.use("/admin-cp", express.static(__dirname + "/admin"));


if (server.port == "") {
    port = process.env.PORT;
} else {
    port = server.port;
}


var writeLog = function (logger, level, msg) {
    logger.log(level, msg);
}

app.post('/AdminLogService', function (req, res) {
    writeLog(adminLogger, req.body.level, req.body.msg);
    res.send("Update Log: ");
});

app.post('/user/login', function (req, res) {
    //writeLog(adminLogger, req.body.level, req.body.msyg);
    
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    // Configure the request
    var options = {
        url: `${server.authentication.protocol}://${server.authentication.host}:${server.authentication.port}${server.authentication.api_path}`,
        method: 'POST',
        headers: headers,
        form: { 'username': req.body.username, 'password': crypto.createHash('md5').update(req.body.password).digest('hex') }
    }
    // Start the request
    requestModule(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var user = JSON.parse(body)[0];
            
            
            if(user != null && user != undefined){
                req.session.user = user;
                res.send('/admin-cp/pages/#/category');
            }else{
                res.send("LOGIN_FAILED");
            }
        }
    });
    
});

app.post('/user/logout', function (req, res) {
    //writeLog(adminLogger, req.body.level, req.body.msyg);
    
    req.session.user = null;
    res.redirect('/login');
    
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