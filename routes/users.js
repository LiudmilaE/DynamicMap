var express = require('express');
var router = express.Router();
const { ensureLoggedIn } = require('../middlewares/auth');
const Organization = require('../models/organization');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', ensureLoggedIn, (req, res, next) => {
  Organization.find({
    ownerId:req.user._id
  }).then((organizations)=>{
    res.render('users/profile', {
      errorMessage: req.flash('error'),
      organizations
    });

  })

});

router.post('/:id/profile', (req, res, next) => {
  const orgaId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Product
   */
  const updates = {
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      phone: req.body.phone,
			address: req.body.address,
			category:req.category.address,
			status:req.category.status,
  };

  Organization.findByIdAndUpdate(orgaId, updates, (err, organization) => {
    if (err){ return next(err); }
    return res.redirect('/organization');
  });


});



module.exports = router;
