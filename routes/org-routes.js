const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Organization = require('../models/organization');

const { ensureLoggedIn } = require('../middlewares/auth');


router.get('/', (req,res,next) => {
	 Organization.find({} , (err, organizations) => {
	 if (err) {return next(err)}
	 res.render('organizations/index', {
		 organizations: organizations
	 });
 });
});

router.get('/new', ensureLoggedIn, (req, res, next) => {
	res.render('organizations/new', {
		errorMessage: req.flash('error'),
	});
});


router.post('/new', ensureLoggedIn, (req, res, next) => {
	 // Get Params from POST
	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};

	const organization = new Organization({
		name: req.body.name,
		description: req.body.description,
		contacts: {
			email: req.body.email,
			phone: req.body.phone,
		},
		address: {
			zip: req.body.zip,
			country: req.body.country,
			city: req.body.city,
			street: req.body.street,
		},
		category: req.body.category,
		ownerId: req.user._id,
		location: location,
	});

	organization.save(err => {
		if (err) return next(err);
		res.redirect('/');
	});
});

//TODO checkAdmin

router.get('/admin-requests', ensureLoggedIn, (req,res,next) => {
	 Organization.find({} , (err, organizations) => {
	 if (err) {return next(err)}
	 res.render('organizations/admin-requests', {
		 organizations
	 });
 });
});

router.post('/:id', ensureLoggedIn, (req,res,next) => {
	Organization.findByIdAndUpdate(req.params.id, {status: req.body.status},(err,response)  => {
		res.redirect("admin-requests");
	})
})
router.get('/:id/edit', ensureLoggedIn, (req, res, next) => {
	res.render('organizations/edit', {
		errorMessage: req.flash('error'),
	});
});

router.get('/:id/edit', (req, res, next) => {
  const orgaId = req.params.id;

  Organization.findById(organizationId, (err, organization) => {
    if (err) { return next(err); }
    res.render('organizations/edit', { organization: organization });
  });
});

router.post('/:id', (req, res, next) => {
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
    return res.redirect('organizations');
  });
});


module.exports = router;
