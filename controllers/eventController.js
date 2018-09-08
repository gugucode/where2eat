const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createEvent: function(req, res) {
    console.log("create event")
    const data = req.body;
    console.log(data)
    db.Events.create(data)
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err)
    })
  },

  cancelEvent: function(req, res) {
    console.log("cancel event")
    const data = req.body;
    console.log(data)
    
  },
};
