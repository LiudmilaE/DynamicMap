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
router.get('/login', ensureLoggedOut, (req, res, next) => {
	res.render('auth/login');
});

//logout
router.get('/logout', ensureLoggedIn, (req, res, next) => {
  req.logout();
  res.redirect('/login');
});

//signup
router.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true,
  })
);

module.exports = router;