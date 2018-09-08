const router = require("express").Router();
const db = require("../../models");
const bcrypt = require("bcrypt-nodejs")
const loggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        next()
    }else{
        res.json({loggedIn: false})
    }
}

// const hashPassword = function(passport){
//     return bcrypt.hashSync(bcrypt.genSaltSync(10))
//   }

// const comparePassword = function(password,hash){
//     return bcrypt.compareSync(password,hash)
//   }

module.exports= function(passport){
    router.post("/signup", function(req, res){
        console.log("got it")
        db.User.findOne({
            where: {
                username: req.body.username
            }
        }).then(function(err, dbUser){
            if(err){
                console.log(err)
                res.status(500).send("error occured")
            }
            else if(dbUser){
                res.status(500).send("username already exists")
            }
            else{
                let newUser = new db.User();
                newUser.username = req.body.username;
                newUser.firstName = req.body.firstName;
                newUser.lastName = req.body.lastName;
                newUser.email = req.body.email;
                newUser.password = newUser.hashPassword(req.body.password);
                
                newUser.save().then(function(newuser){
                    console.log(newuser.usernamr + " created successfully")
                    res.json({success: true})
                }).catch(function(error){
                    console.log(error)
                })
            }
        })
    })

    router.post("/login", passport.authenticate('local'), 
    function(req,res){
        res.json({success: true, message: "Logged in successfully"})
        console.log("HEY")
    })

    router.get("/logout", function(req, res){
        console.log("Logged out")
        req.session.destroy(function (err) {
            console.log("here")
            if(err){console.log(err)}
            res.send({logout: true, message: "Logged out successfully"})
        })
      })

      router.get("/auth", loggedIn, function(req, res, next){
        res.send(req.session)
      })
    return router;
}
