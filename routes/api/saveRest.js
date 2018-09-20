const router = require("express").Router();
const saveRestaurant = require("../../controllers/saveRest");

// Matches with "/api/sendPickInvite"
router
  .route("/")
  .post(saveRestaurant.saveRest);

router
.route("/:id")
.delete(saveRestaurant.deleteRest)
.put(saveRestaurant.likeRest);

router
  .route("/numlike/:id")
  .get(saveRestaurant.getNumLike);

module.exports = router;
