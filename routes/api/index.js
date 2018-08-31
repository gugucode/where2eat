const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");

// Book routes
router.use("/invite", inviteFriendRoutes);

module.exports = router;
