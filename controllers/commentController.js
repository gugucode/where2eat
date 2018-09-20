const db = require("../models");

// Defining methods for the booksController
module.exports = {
    addComment: function(req, res) {
        console.log("create Comment")
        let data = req.body;
        // data['creator'] =  req.restaurant;
        db.Comments.create(data)
        .then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err)
        })
    },


    deleteComment: function(req, res) {
        console.log("remove Comment")
        const id = req.params.id;
        console.log(id)
        db.Comments.destroy({
            where: {
                id: id,
                creator: req.user.username
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
                restId: req.params.id
            },
            order: [
                ['createdAt', 'DESC']
            ],
        }).then(result => {
            console.log(result)
            res.send(result)            
        }).catch(err => {
            console.log(err)
        })
    }
};
