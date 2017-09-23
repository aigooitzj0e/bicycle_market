let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
	first_name: {type:String, required:true},
	last_name: {type:String, required:true},
	email: {type: String, required:true},
	password: {type:String, required:true, minlength: 8},
	bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
});


mongoose.model('User', UserSchema);
