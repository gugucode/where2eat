const db = require("../models");

// Defining methods for the booksController
module.exports = {
    addComment: function(req, res) {
        console.log("create Comment")
        let data = req.body;
        data['creator'] =  req.restaurant;
        db.comments.create(data)
        .then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err)
        })
    },


    deleteComment: function(req, res) {
        console.log("cancel Comment")
        const data = req.body;
        console.log(req)
        db.Comments.destroy({
            where: {
                id: data.id,
                creator: req.restaurant
            }
        }).then(result => {
            console.log(result)
            res.status(200).end()
        }).catch(err => {
            console.log(error)
        })
        
    },

    findAllComments: function(req,res){
        // console.log(req.user.username);
        db.Comments.findAll({
            where: {
                creator: req.comments
            }
        }).then(result => {
            console.log(result)
            res.send(result)
            
        }).catch(err => {
        console.log(err)
        })
    }
};
