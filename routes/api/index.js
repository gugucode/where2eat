const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");
const loginUser = require("./login");

// Book routes
router.use("/invite", inviteFriendRoutes);
router.use("/", loginUser);

module.exports = router;
