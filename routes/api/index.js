const router = require("express").Router();
// const inviteFriendRoutes = require("./inviteFriend");
const friend = require("./friend");
const loginUser = require("./login");
const signUp = require("./signUp");
const saveRest = require("./saveRest");
const event = require("./event")

// Book routes
router.use("/friend", friend);
// router.use("/addFriend", friend);
router.use("/event", event);
router.use("/saved", saveRest);
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);
router.use("/", loginUser);
router.use("/", signUp);

module.exports = router;
