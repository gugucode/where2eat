const router = require("express").Router();
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/searchRestaurant", restaurantRoutes);

module.exports = router;
