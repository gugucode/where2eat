const db = require("../models");

module.exports = {

    createUser: function(req,res){

        db.User.create(req.body).then(dbUser => {
            res.json(dbUser)
        })
    },

    checkUsername: (req, res) => {
        const username = req.params.username;
        db.User.findOne({
            where:{
                username: username,
            }
        }).then(result => {
            if(result){
                res.json({exists: true})
            }else{
                res.json({exists: false})
            }
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
    // db.sequelize.literal(`concat(friends,"&${friend}")`)
    // add new friend to existing user, friends = "friend1$friend2$..."
    addFriend: function(req,res){
        console.log("add friend")
        const {friend} = req.body;
        const user = req.user.username;

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
                    console.log(data);
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
       
    },

    deleteFriend: function(req,res){
        console.log("add friend")
        const {friend} = req.body;
        const user = req.user.username;

        db.User.findAll({
            where: {
                username: user,
            }
        }).then(result => {
            console.log(result);
            if(result.length === 1 && result[0].dataValues.friends.indexOf(friend) !== -1){
                const newFriend = result[0].dataValues.friends.replace(`&${friend}`,"");
                db.User.update({
                    friends: newFriend
                },{
                    where: {
                        username: user
                    }
                }).then((data) => {
                    console.log(data);
                    if(data.length === 1 && data[0] === 1){
                        res.status(200).send(`${friend} is not your friend now!`);
                    }else{
                        res.status(404).send("Something wrong!");
                    }
                }).catch(err => {
                    console.log(err);
                })
            }else{
                res.status(404).send(`${friend} is not your friend!`);
            }
        })
    },

    findAllFriends: function(req,res){
        console.log(req.user.username);
        db.User.findAll({
            where: {
                username: req.user.username
            }
        }).then(result => {
            console.log(result[0].dataValues.friends)
            if(result.length === 1 && result[0].dataValues.friends){
                const friends = result[0].dataValues.friends.split('&')
                console.log(friends)
                res.send(friends)
            }else{
                res.send([])
            }
            
        })
    }


}