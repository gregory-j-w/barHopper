var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
	name: String,
	yelpId: String,
	location: {
		type: { type: String },
		coordinates: [Number]
	},
	imageUrl: String,
	address: String,
	phone: String
})

var barModel = mongoose.model('Bar', BarSchema);

module.exports = barModel