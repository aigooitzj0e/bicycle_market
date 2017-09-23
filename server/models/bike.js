let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BikeSchema = mongoose.Schema({
	title: {type:String, required:true},
	description: {type:String, required:true, maxlength: 200},
	price: {type: Number, required:true, min: 1},
	location: {type:String, required:true},
  image: {type: String},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true});
mongoose.model('Bike', BikeSchema);
