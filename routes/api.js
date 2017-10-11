var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/markers', function(req, res, next) {
  var result = [{test: "Test"}];
  res.json(result);
});

module.exports = router;
