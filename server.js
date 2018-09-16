const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const localStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const secretCode = process.env.secret || "where2eat secret";
const db = require("./models")

require("./config/passport")(passport)
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//express session configuration
// For Passport
app.use(session({
   secret: secretCode, 
   resave: true, 
   saveUninitialized: true 
  })); // session secret
  
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(flash());

//Global vars
app.use(function(req,res,next){
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/where2eatDB");

app.use(express.static("client/build"));
// app.use(express.static("./public"));


app.get("/logout", function(req, res){
  console.log("Logged out")
  req.logout();
  res.redirect("/")
})


// Start the API server

db.sequelize.sync({ force: true }).then(function() {
  require("./insertTestData.js")(db);
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});