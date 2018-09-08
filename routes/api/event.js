const router = require("express").Router();
const event = require("../../controllers/eventController");
const pickInviteController = require("../../controllers/eventController");

// Matches with "/api/sendPickInvite"
router
  .route("/createevent")
  .post(event.createEvent)


  
module.exports = router;
