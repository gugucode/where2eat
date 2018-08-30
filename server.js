const express = require("express");
const bodyParser = require("body-parser");
const emailTemp = require("./public/emailTemplate/pickRestInvite");
const axios = require("axios");
// const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);
//google map API
searchLocation = event => {
  let location = {
    
  }
}

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/where2eatDB");

app.use(express.static("client/build"));


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'meiyuechang@gmail.com',
  from: 'gugocodedev@gmail.com',
  subject: 'Sending with SendGrid',
  text: 'and easy to do anywhere, even with Node.js',
  html: emailTemp,
};
sgMail.send(msg);




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
