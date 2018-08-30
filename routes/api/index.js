const router = require("express").Router();
const restaurantRoutes = require("./restaurant");

// Book routes
router.use("/restaurant", restaurantRoutes);

module.exports = router;
