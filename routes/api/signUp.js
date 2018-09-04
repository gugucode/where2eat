const router = require("express").Router();
const userController = require("../../controllers/userController");


router
    .route("/signUp")
    .post(userController.createUser)

module.exports = router;