const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const STATUSES = [ 'entrepreneur', 'incubatorMember' ];

const userSchema = new Schema({
	username: String,
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	status: {
		type: String,
		enum: STATUSES,
		default: 'entrepreneur',
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
});

module.exports = mongoose.model('User', userSchema);
