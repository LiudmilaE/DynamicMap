const mongoose = require('mongoose');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const User = require('../models/user');

mongoose.connect("mongodb://localhost/dynamic-map");
const salt = bcrypt.genSaltSync(bcryptSalt);
const encryptedPass1 = bcrypt.hashSync("africa", salt);
const encryptedPass2 = bcrypt.hashSync('ukraine', salt);

const admin1 = new User({
  username: 'Elodie',
  password: encryptedPass1,
  email: 'elodie.wanang@gmail.com', 
  status: 'enterpreneur',
  isAdmin: true,
});

const admin2 = new User({
  username: 'Liudmila',
  password: encryptedPass2,
  email: 'liudmyla.iefremova@gmail.com', 
  status: 'enterpreneur',
  isAdmin: true,
});

User.create(admin1, (err, user) => {
  if (err) {
	throw err;
  }
  console.log(user);
  mongoose.connection.close();
});

User.create(admin2, (err, user) => {
  if (err) {
	throw err;
  }
  console.log(user);
  mongoose.connection.close();
});