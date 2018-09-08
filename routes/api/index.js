const passport = require("passport")
const router = require("express").Router();
const inviteFriendRoutes = require("./inviteFriend");
const addFriend = require("./addFriend");
const loginUser = require("./login");
const signUp = require("./auth")(passport);
const saveRest = require("./saveRest");
const loggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        next()
    }else{
        res.send("You're not allowed to see this page")
    }
}

// Book routes
router.use("/invite", inviteFriendRoutes);
router.use("/addFriend", addFriend);
router.use("/saved", saveRest);
const restaurantRoutes = require("./restaurant");


router.use("/searchRestaurant", restaurantRoutes);
router.use("/", loginUser);
router.use("/", signUp);
  
  router.get("/dashboard", loggedIn, function(req, res, next){
    console.log("HIT DASHBOARD")
    res.send(req.session)
  })
  
  router.get("/logout", function(req, res){
    console.log("Logged out")
    req.logout();
    res.redirect("/")
  })




module.exports = router;
