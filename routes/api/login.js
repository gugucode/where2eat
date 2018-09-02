const router = require("express").Router();
// const liginController = require("../../controllers/loginController.js");


router
    .route("/auth")
    .post(function(req, res){
        const userData= req.body;
        if(userData.password === "1"){
            res.json({auth: true})
        }else{
            res.json({auth: false})
        }
    })

module.exports = router;