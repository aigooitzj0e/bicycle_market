let mongoose = require('mongoose');
let User = mongoose.model("User");
let bcrypt = require('bcrypt');
let session = require('express-session');


module.exports = {

  registerUser: (req, res) => {
    console.log('hit registerUser in controllers');
    console.log(req.body)
    User.findOne({email: req.body.email}).exec((err, userFound) => {
      if (err) {
        console.log('error in users controller');
        res.json(err);
      }
      else {
        if(!userFound) {
          console.log('creating user..');
          let newUser = new User(req.body);
          let hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
          console.log('hashing PW');
          newUser.password = hashedPassword;
          newUser.save((err) => {
            if(err) {
              console.log("Error!", err);
              res.json(err);
            }
            else {
              console.log('Register Successful!');
              req.session.user_id = newUser._id;
              res.json(newUser);
            }
          })
        }
      }

    })
    .catch((err) => {
      res.json(err);
    })
  },

  login: (req, res)=> {
    console.log('Hit login in controllers');
    User.findOne({email: req.body.email}).exec((err, userFound)=> {
      if(err) {
        console.log('error')
        res.json(err);
      }
      else {
        if(userFound) {
          if(bcrypt.compareSync(req.body.password, userFound.password)===true){
            console.log('Passwords MATCH!');
            req.session.user_id = userFound._id;
            res.json(true);
          }
          else {
            console.log('HACKER ALERT, LOGIN FAILED');
            res.json({
              errors:{
                login:{
                  message: 'Incorrect Login Info!'
                }
              }
            })
          }
        }
      }
    })
  },

  currentUser: (req, res)=> {
    console.log("hit users.getCurrent");
		if(req.session.user_id == undefined){
			res.json({
				errors:
				{
					getCurrent: {message:"you are not logged in"}
				}
			});
		}
    else{
			User.findOne({_id: req.session.user_id}).exec((err,userFound)=>{
				if(err){
					console.log("you goofed");
					res.json(false);
				}else{
					console.log("found user in session");
					res.json(userFound);
				}
			})
		}
  },

  findMaker: (req, res)=> {
		console.log(req.body.user_id)
		User.findOne({_id: req.body.user_id})
    .populate('bikes')
    .exec((err, user)=> {
			if(err) {
				console.log('errors!', err);
				res.json(err);
			}
			else {
				console.log('Found the Maker!', user);
				res.json(user);
			}
		})
	},

  logoff: (req, res)=> {
    console.log('Hit logoff controller')
    req.session.destroy();
    res.json(true);
  }

}
