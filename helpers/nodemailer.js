const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CLIENT_EMAIL,
    pass: process.env.CLIENT_PASSWORD,
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

function sendEmailForgotPassword(email, newPassword) {
  const options = {
    from: "'Ardawalika' <no-reply@gmail.com>",
    to: email,
    subject: "Reset Password",
    text: "Your new password is " + newPassword,
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
}

module.exports = { sendEmail, sendEmailResetPassword, sendEmailForgotPassword };
