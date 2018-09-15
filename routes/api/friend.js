const router = require("express").Router();
const userController = require("../../controllers/userController");
const pickInviteController = require("../../controllers/pickInviteController");
const friends = require("../..");

// Matches with "/api/sendPickInvite"
router
  .route("/sendPickInvite")
  .post(pickInviteController.sendPickInvite)

// Matches with "/api/addFriend/searchFriend/searchKey"
router
  .route("/searchFriend/:searchKey")
  .get(userController.findUsers)

router
  .route("/add")
  .put(userController.addFriend)

// router
//   .route("/")
//   .get()
  
module.exports = router;
