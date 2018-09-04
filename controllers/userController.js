const db = require("../models");

module.exports = {
    createUser: function(req,res){
        console.log(req.body)
        db.User.create(req.body).then(dbUser => {
            res.json(dbUser)
        })
    },
    // find user by username
    findUsers: function(req,res){
        console.log("searchFriend");
        const key = req.params.searchKey;
        console.log(key);
        db.User.findAll({
            where:{
                username: {
                    $like: `%${key}%`
                }
            },
            attributes: ['id', 'username']
        }).then(result => {
            // console.log(result);
            res.json(result)
        }).catch(err => {
            console.log(err);
        })
    },
    // add new friend to existing user, friends = "friend1$friend2$..."
    addFriend: function(req,res){
        console.log("add friend")
        const {user, friend} = req.body;
        console.log(user);
        console.log(friend)

        db.User.findAll({
            where: {
                username: user,
                friends: {
                    $like: `%${friend}%`
                }
            }
        }).then(result => {
            console.log(result);
            if(!result.length){
                db.User.update({
                    friends: db.sequelize.literal(`concat(friends,"&${friend}")`)
                },{
                    where: {
                        username: user
                    }
                }).then((data) => {
                    if(data.length === 1 && data[0] === 1){
                        res.send(`${friend} is your friend now!`);
                    }else{
                        res.send("Something wrong!");
                    }
                }).catch(err => {
                    console.log(err);
                })
            }else{
                res.send(`${friend} is your friend already!`);
            }
        })
       
    }
}