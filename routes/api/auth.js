const router = require("express").Router();
const db = require("../../models");
const bcrypt = require("bcrypt-nodejs")

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
                newUser.password = newUser.hashPassword(req.body.password);
                
                newUser.save().then(function(newuser){
                    console.log(newuser)
                    res.json({success: true})
                }).catch(function(error){
                    console.log(error)
                })
            }
        })
    })

    router.post("/login", passport.authenticate('local'), 
    function(req,res){
        res.json({sucess: true})
        console.log("HEY")
    })
    return router;
}
