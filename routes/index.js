var express = require('express');
var router = express.Router();
const Organization = require('../models/organization');

/* GET home page. */
router.get('/', function(req, res, next) {
	Organization.find((error, organizations) => {
		if (error) { next(error); }
    else {
      res.render('index', { organizations });
    }
	})
  //res.render('index', { title: 'DynamicMap' });
});

module.exports = router;