const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");

// Book routes
router.use("/invite", inviteFriendRoutes);
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);

module.exports = router;
