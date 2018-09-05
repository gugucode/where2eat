const router = require("express").Router();
const restaurantController = require("../../controllers/saveRest");
const googleAPI =  require("../../controllers/googleAPI");

// // Matches with "/api/restaurant"
// router.route("/")
//   .get(restaurantController.findAll)
//   .post(restaurantController.create);

// Matches with "/api/restaurant/:id"
router
  .route("/:cuisine/:zipCode")
  .get(googleAPI.searchLocation)
  // .put(restaurantController.update)
  // .delete(restaurantController.remove);

module.exports = router;