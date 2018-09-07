const localStrategy = require('passport-local').Strategy
const db = require("../models")
const bcrypt = require("bcrypt-nodejs")

// const comparePassword = function(password,hash){
//     return bcrypt.compareSync(password,hash)
//   }
module.exports= function(passport){
    passport.serializeUser(function(user, done){
        done(null,user)
    })
    passport.deserializeUser(function(user, done){
        done(null,user)
    })

    passport.use(new localStrategy(function(username,password,done){
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser){
            if(dbUser){
                console.log(dbUser.password)
                console.log(password)
                const valid = dbUser.comparePassword(password, dbUser.password)
                console.log(valid)
                if(valid){
                    console.log("signed INN")
                    done(null,{
                        username: dbUser.username,
                        password: dbUser.password
                    })
                }else{
                    done(null,false)
                }
            }else{
                done(null,false)
            }
        })
    }))
}