const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');

const { ensureLoggedIn, ensureLoggedOut } = require('../middlewares/auth');

//signup
router.get('/signup', ensureLoggedOut, (req, res, next) => {
  res.render('auth/signup', {
    errorMessage: req.flash('error'),
  });
});


//login
router.get('/login', (req, res, next) => {
	res.render('auth/login');
});

module.exports = router;