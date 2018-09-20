const db = require("../models");
const emailTemp = require("../public/emailTemplate/eventInvite");
const sgMail = require('@sendgrid/mail');

function sendEmail(email,data,res){
  const msg = {
    to: email,
    from: 'gugocodedev@gmail.com',
    subject: "Let's Hangout",
    html: emailTemp(data),
  };

  sgMail.send(msg, (error, result) => {
      // console.log(result);
      if(error){
        console.log(error)
        res.send(error);
      }else{
        res.send(result);
      }
  }).catch(err => {
    console.log(err);
  })
}
// Defining methods for the booksController
module.exports = {
  sendPickInvite: function(req, res) {
    console.log("get send invite request")
    const data = req.body;
    console.log(req.body)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   

    for( let i=0; i<data.receiverEmail.length; i++){
      const e = data.receiverEmail[i]
      if(e.indexOf("@") !== -1){
        // emails.push({email: e})
        sendEmail(e,data,res)
      }else{
          const key = e;
          
          db.User.findAll({
              where:{
                  username: key               
              },
              attributes: ['email']
          }).then(result => {
              console.log(result[0].dataValues.email);
              sendEmail(result[0].dataValues.email,data,res)
              
          }).catch(err => {
              console.log(err);
          })
      }
    }

  },
};
