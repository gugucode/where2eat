const passport = require("passport")
const router = require("express").Router();
// const inviteFriendRoutes = require("./inviteFriend");
const friend = require("./friend");
const signUp = require("./auth")(passport);
const saveRest = require("./saveRest");
const event = require("./event")
const checkUser = require("./checkUsername")


// Book routes
router.use("/friend", friend);
// router.use("/addFriend", friend);
router.use("/event", event);
router.use("/saved", saveRest);
const restaurantRoutes = require("./restaurant");


router.use("/searchRestaurant", restaurantRoutes);
// router.use("/", loginUser);
router.use("/", signUp);
router.use("/check", checkUser);
  
  
  
<<<<<<< HEAD
//   router.get("/logout", function(req, res){
//     console.log("Logged out")
//     req.logout();
//     res.redirect("/")
//   })
=======



>>>>>>> a67f7fab3d39b6435627e1ebbaccf2f898106531


module.exports = router;
