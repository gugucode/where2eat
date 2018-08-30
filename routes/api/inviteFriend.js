const router = require("express").Router();
const pickInviteController = require("../../controllers/pickInviteController");

// Matches with "/api/sendPickInvite"
router
  .route("/sendPickInvite")
  .post(pickInviteController.sendPickInvite)


module.exports = router;
