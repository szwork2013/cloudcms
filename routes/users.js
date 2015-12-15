var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('the time is' + new Date().toString());
  res.render('index', { title: new Date().toString()});
});

module.exports = router;
