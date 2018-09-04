const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");
const loginUser = require("./login");
const signUp = require("./signUp");

// Book routes
router.use("/invite", inviteFriendRoutes);
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);
router.use("/", loginUser);
router.use("/", signUp);

module.exports = router;
