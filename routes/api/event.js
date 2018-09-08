const router = require("express").Router();
const userController = require("../../controllers/userController");
const pickInviteController = require("../../controllers/eventController");

// Matches with "/api/sendPickInvite"
router
  .route("/createEvent")
  .post()

// Matches with "/api/addFriend/searchFriend/searchKey"
router
  .route("/searchFriend/:searchKey")
  .get(userController.findUsers)

router
  .route("/add")
  .put(userController.addFriend)
  
module.exports = router;
