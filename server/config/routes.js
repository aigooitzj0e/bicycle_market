let Bikes = require('./../controllers/bikes');
let Users = require('./../controllers/users');
let path = require('path');

module.exports = (app)=>{
	//Users
	app.post('/api/users', Users.registerUser)
	app.post('/api/login', Users.login)
	app.get('/api/users/current', Users.currentUser)
	app.post('/api/dashboard/findMaker', Users.findMaker)
	app.get('/api/logoff', Users.logoff)


	//Bikes
	app.get('/api/dashboard', Bikes.getAllList)
	app.post('/api/dashboard/create', Bikes.create)
	app.get('/api/dashboard/displayMyBikes', Bikes.displayMyBikes)
	app.post('/api/dashboard/update', Bikes.update)
	app.put('/api/destroy', Bikes.destroy)
	app.put('/api/delete', Bikes.delete)




	app.all('*', (req, res) => {
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}
