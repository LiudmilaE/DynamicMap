const express = require('express');
const passport = require('passport');
const router = express.Router();

const { ensureLoggedIn, ensureLoggedOut } = require('../middlewares/auth');

router.get('/signup', ensureLoggedOut, (req, res, next) => {
  res.render('auth/signup', {
    errorMessage: req.flash('error'),
  });
});

module.exports = router;