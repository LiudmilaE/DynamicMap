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
	contacts: {
		email: { type: String, required: true, },
		phone: { type: String, required: true, },
	},
	address: {
<<<<<<< HEAD
		zip: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		street: {
			type: String,
			required: true,
		},
=======
		zip: { type: String, required: true, },
		country: { type: String, required: true, },
		city: { type: String, required: true, },
		street: { type: String, required: true, },
>>>>>>> 7d376d1c69ed2582b64775aef5937a71d630cd7d
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
	location: { type: { type: String }, coordinates: [Number] }
});

organizationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Organization', organizationSchema);
