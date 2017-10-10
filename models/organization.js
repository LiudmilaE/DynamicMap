const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATEGORIES = [ 'startup', 'incubator' ];
const STATUSES_ORG = [ 'pending', 'accepted', 'rejected'];

const organizationSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
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

module.exports = mongoose.model('Organization', organizationSchema);
