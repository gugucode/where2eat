
const emailTemp = require("../public/emailTemplate/pickRestInvite");

// Defining methods for the booksController
module.exports = {
  sendPickInvite: function(req, res) {
    console.log("get send invite request")
    const data = req.body;
    console.log(req.body)
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: data.receiverEmail,
    from: 'gugocodedev@gmail.com',
    subject: "Let's pick a restaurant",
    // text: 'and easy to do anywhere, even with Node.js',
    html: emailTemp(data),
    };

    sgMail.send(msg).then(result => {
        res.send(result);
    })
  },
};
