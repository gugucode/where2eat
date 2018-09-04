
const emailTemp = require("../public/emailTemplate/pickRestInvite");

// Defining methods for the booksController
module.exports = {
  searchFriends: function(req, res) {
    console.log("get search friend request")
    const data = req.body;
    console.log(data)
    
  },

  addFriends: function(req, res) {
    console.log("get add friend request")
    const data = req.body;
    console.log(data)
    
  },
};
