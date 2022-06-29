var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DoctorSchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : String,
	'password' : String,
});

module.exports = mongoose.model('Users', DoctorSchema);
