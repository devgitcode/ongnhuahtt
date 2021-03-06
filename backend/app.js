var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var users = require('./routes/users');

/*
 * Define những API đã viết trong backend\api\services
 */
var categoryAPI= require('./api/services/CategoryAPI');
var productAPI = require('./api/services/ProductAPI');
var menuAPI = require('./api/services/MenuAPI');
var newsAPI = require('./api/services/NewsAPI');
var catalogAPI = require('./api/services/CatalogAPI');
var introductionAPI = require('./api/services/IntroductionAPI');
var contactAPI = require('./api/services/ContactAPI');
var footerAPI = require('./api/services/FooterAPI');
var userAPI = require('./api/services/UsersAPI');
var authAPI = require('./api/services/AuthenticationAPI');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);

/**
 * Kích hoạt API để có thể run được từ phía Client
 */
categoryAPI(app);
productAPI(app);
menuAPI(app);
newsAPI(app);
catalogAPI(app);
introductionAPI(app);
contactAPI(app);
footerAPI(app);
userAPI(app);
authAPI(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
