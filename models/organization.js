const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATEGORIES = [ 'startup', 'incubator' ];
const STATUSES_ORG = [ 'pending', 'accepted', 'rejected'];

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	contacts: {
		type: String,
		required: true,
	},
	adress: {
		type: String,
		required: true,
	},
	category: { 
		type: String,
		enum: CATEGORIES,
		default: 'startup',
	},
	status: { 
		type: String,
		enum: STATUSES_ORG,
		default: 'pending',
	},
	ownerId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
});

module.exports = mongoose.model('Organization', userSchema);
