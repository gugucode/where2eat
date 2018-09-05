const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");
const addFriend = require("./addFriend");
const loginUser = require("./login");
const signUp = require("./signUp");
const saveRest = require("./saveRest");

// Book routes
router.use("/invite", inviteFriendRoutes);
router.use("/addFriend", addFriend);
router.use("/saved", saveRest);
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);
router.use("/", loginUser);
router.use("/", signUp);

module.exports = router;
