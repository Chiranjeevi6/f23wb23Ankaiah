var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mobile', { title: 'Search Results Mobile' });
});


module.exports = router;
