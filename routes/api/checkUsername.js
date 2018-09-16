const router = require("express").Router();
const userController = require("../../controllers/userController");


router
    .route("/:username")
    .get(userController.checkUsername)

module.exports = router;