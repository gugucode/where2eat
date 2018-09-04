const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/addFriend/searchFriend/searchKey"
router
  .route("/searchFriend/:searchKey")
  .get(userController.findUsers)

router
  .route("/add")
  .put(userController.addFriend)
  
module.exports = router;
