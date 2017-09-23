let mongoose = require('mongoose');
let Bike = mongoose.model("Bike");

module.exports = {
	create: (req,res)=>{
		console.log("hit bikes.create");

		let newBike = new Bike(req.body);
		console.log('Creating Bike Listing..' , newBike._id);
		console.log('Logged in user ID', req.session.user_id);
		newBike._user = req.session.user_id;
		newBike.save((err)=> {
			if(err){
				console.log('error!', err);
				res.json(err);
			}
			else {
				console.log('Listing Successfully Created!');
				res.json(newBike);
			}
		});
	},

	getAllList: (req, res)=> {
		console.log('hit getallList in controllers');
		Bike.find().exec((err, bikeList)=> {
			if(err) {
				console.log('errors!', err);
				res.json(err);
			}
			else {
				console.log('Found bikeList');
				res.json(bikeList);
			}
		})
	},

	displayMyBikes: (req, res)=> {
		console.log('Hit displayMyBikes in bikes Controller');
		Bike.find({  _user: req.session.user_id }).exec((err, userBikes)=> {
			if(err) {
				console.log('Error!', err);
				res.json(err);
			}
			else {
				console.log('Bikes Found!');
				res.json(userBikes);
			}
		})
	},

	update: (req, res)=> {
		console.log('Hit update in controllers');
		console.log("req.body", req.body);
		Bike.findByIdAndUpdate(req.body._id, req.body, (err, updatedBike)=> {
			if(err) {
				console.log('error!', err);
				res.json(err);
			}
			else {
				console.log('Successfully Updated Bike');
				res.json(updatedBike);
			}
		})
	},

	destroy: (req, res)=> {
		console.log('hit destroy in controllers');
		console.log(req.body);
		Bike.findByIdAndRemove(req.body._id, (err, deletedBike)=> {
			if(err){
				console.log('Error!', err);
				res.json(err);
			}
			else {
				console.log('Successfully Deleted!');
				res.json(deletedBike);
			}
		})
	},

	delete: (req, res)=> {
		console.log('Hit Delete in Controllers');
		console.log(req.body);
		Bike.findByIdAndRemove(req.body.bike_id, (err, deletedBike)=> {
			if(err){
				console.log('Error!', err);
				res.json(err);
			}
			else {
				console.log('Successfully Deleted!');
				res.json(deletedBike);
			}
		})
	}



}
