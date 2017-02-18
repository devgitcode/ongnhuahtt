var express = require('express');
var router = express.Router();
var appInfo = require('../config/app_info.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/app-info', function(req,res){
  res.json(appInfo);
});

module.exports = router;
