const mongoose = require('mongoose');
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const User = require('../models/user');
const Organization = require('../models/organization');

mongoose.connect("mongodb://localhost/dynamic-map");
const salt = bcrypt.genSaltSync(bcryptSalt);
const encryptedPass1 = bcrypt.hashSync("africa", salt);
const encryptedPass2 = bcrypt.hashSync('ukraine', salt);

const admin1 = new User({
	username: 'Elodie',
	password: encryptedPass1,
	email: 'elodie.wanang@gmail.com', 
	status: 'entrepreneur',
	isAdmin: true,
});

const admin2 = new User({
	username: 'Liudmila',
	password: encryptedPass2,
	email: 'liudmyla.iefremova@gmail.com', 
	status: 'entrepreneur',
	isAdmin: true,
});

const incubator1 = new Organization({
	name: "Entrepreneur Incubator",
	description: "Business Development Service. For more information - check up web site ei.co.za",
	contacts: {
		email: "ayanda@em-solutions.co.za",
		phone: "218392281",
		},
	address: {
		zip: "7925",
		country: "South Africa",
		city: "Cape Town",
		street: "Unit 6C, North Block, 31 Brickfield Road, Woodstock, Salt River",
		},
	category: 'incubator',
	status: 'accepted',
	ownerId: "59de0ff3969e5e08382e0de9",
	location: { type: "Point", coordinates: [ 18.4551591, -33.9353179] }
});

const incubator2 = new Organization({
	name: "Nairobi Garage Ngong Road",
	description: "Fully serviced, coworking office space for startups, techies and entrepreneurs. For more information - check up web site https://nairobigarage.com/",
	contacts: {
		email: "ngongroad@nairobigarage.com",
		phone: "254 755 556 955",
		},
	address: {
		zip: " 00100",
		country: "Kenya",
		city: "Nairobi",
		street: "8th Floor, Pinetree Plaza, Kaburu Drive, Off Ngong Rd",
		},
	category: 'incubator',
	status: 'pending',
	ownerId: "59de0ff3969e5e08382e0de9",
	location: { type: "Point", coordinates: [ 36.7908265, -1.2981487] }
});

const incubator3 = new Organization({
	name: "Nairobi Garage Westlands",
	description: "Fully serviced, coworking office space for startups, techies and entrepreneurs. For more information - check up web site https://nairobigarage.com/",
	contacts: {
		email: "westlands@nairobigarage.com",
		phone: "254 708 556 955",
		},
	address: {
		zip: " 00100",
		country: "Kenya",
		city: "Nairobi",
		street: "M2, Mirage Towers, Westlands, Chiromo Road",
		},
	category: 'incubator',
	status: 'pending',
	ownerId: "59de0ff3969e5e08382e0de9",
	location: { type: "Point", coordinates: [ 36.805311, -1.2702478] }
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

Organization.create(incubator1, (err, organization) => {
	if (err) {
	throw err;
	}
	console.log(organization);
	mongoose.connection.close();
});

Organization.create(incubator2, (err, organization) => {
	if (err) {
	throw err;
	}
	console.log(organization);
	mongoose.connection.close();
});

Organization.create(incubator3, (err, organization) => {
	if (err) {
	throw err;
	}
	console.log(organization);
	mongoose.connection.close();
})