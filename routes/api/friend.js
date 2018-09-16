const router = require("express").Router();
const userController = require("../../controllers/userController");
const pickInviteController = require("../../controllers/pickInviteController");
const friends = require("../..");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect("/");
}

// Matches with "/api/sendPickInvite"
router
  .route("/sendPickInvite")
  .post(isLoggedIn, pickInviteController.sendPickInvite)

// Matches with "/api/addFriend/searchFriend/searchKey"
router
  .route("/searchFriend/:searchKey")
  .get(isLoggedIn, userController.findUsers)

router
  .route("/add")
  .put(isLoggedIn, userController.addFriend)

router
  .route("/delete")
  .put(isLoggedIn, userController.deleteFriend)

router
  .route("/findAll")
  .get(isLoggedIn, userController.findAllFriends)
// router
//   .route("/")
//   .get()
  
module.exports = router;
