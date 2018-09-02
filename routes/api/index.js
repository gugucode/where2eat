const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");
const loginUser = require("./login");

// Book routes
router.use("/invite", inviteFriendRoutes);
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);
router.use("/", loginUser);

module.exports = router;
