const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // user: "<Email Ardawalika>",
    // pass: "<Password Ardawalika>",
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

function sendEmailResetPassword(email, url) {
  const options = {
    from: "'Ardawalika' <no-reply@gmail.com>",
    to: email,
    subject: "Verification Email",
    html: `<h1>Reset Your Password</h1><a href="${url}" target="_blank">Click this</a>`,
  };

  transporter.sendMail(options);
}

module.exports = { sendEmail, sendEmailResetPassword };
