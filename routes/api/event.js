const router = require("express").Router();
const event = require("../../controllers/eventController");
const pickInviteController = require("../../controllers/eventController");

// Matches with "/api/sendPickInvite"
router
  .route("/createevent")
  .post(event.createEvent)

router
  .route("/findall")
  .get(event.findAllEvents)
  
router
  .route("/delete/")
  .delete(event.deleteEvent)

router
  .route("/updateevent/:id")
  .put(event.updateEvent)
  
module.exports = router;
