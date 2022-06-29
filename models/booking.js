var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
	'date': String,
	'fromtime': String,
	'totime': String,
	'userid': String,
	'roomname': String,
	'price': String
});

module.exports = mongoose.model('Booking', DoctorSchema);
