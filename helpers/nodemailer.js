const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "indonesiacatazas@gmail.com",
    pass: "catazasindo123",
  },
});

function sendEmail(email, url) {
  const options = {
    from: "'Ardawalika' <no-reply@gmail.com>",
    to: email,
    subject: "Verification Email",
    text: url,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
}

module.exports = { sendEmail };
