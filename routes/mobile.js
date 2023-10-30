var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fall', { title: 'Search Results Fall' });
});

module.exports = router;
