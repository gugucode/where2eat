const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");
const searchLocation =  require("../../controllers/googleAPI");

// Matches with "/api/restaurant"
router.route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

// Matches with "/api/restaurant/:id"
router
  .route("/:cuisine/:zipCode")
  .get(searchLocation)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

