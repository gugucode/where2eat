const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createEvent: function(req, res) {
    console.log("create event")
    let data = req.body;
    data['creator'] =  req.user.username;
    db.Events.create(data)
    .then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err)
    })
  },

  deleteEvent: function(req, res) {
    console.log("cancel event")
    const data = req.body;
    console.log(req)
    db.Events.destroy({
        where: {
            id: data.id,
            creator: req.user.username
        }
    }).then(result => {
        console.log(result)
        res.send(result)
    })
    
  },

  findAllEvents: function(req,res){
    // console.log(req.user.username);
    db.Events.findAll({
        where: {
            creator: req.user.username
        }
    }).then(result => {
        console.log(result)
        res.send(result)
        
    }).catch(err => {
      console.log(err)
    })
}
};
