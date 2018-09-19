const passport = require("passport")
const router = require("express").Router();
// const inviteFriendRoutes = require("./inviteFriend");
const friend = require("./friend");
const signUp = require("./auth")(passport);
const saveRest = require("./saveRest");
const event = require("./event")
const checkUser = require("./checkUsername")
const comment = require("./comments")


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

// friend routes
router.use("/friend", isLoggedIn, friend);
// router.use("/addFriend", friend);
router.use("/event", isLoggedIn, event);
router.use("/saved", isLoggedIn, saveRest);

const restaurantRoutes = require("./restaurant");
router.use("/searchRestaurant", restaurantRoutes);
//rest router
router.use("/restaurants", restaurantRoutes);
router.use("/comment",comment);

// router.use("/", loginUser);
router.use("/", signUp);
router.use("/check", checkUser);
  
  





module.exports = router;
