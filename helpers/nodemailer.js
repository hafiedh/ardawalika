const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'ardawalikatest@gmail.com',
      pass: 'ardawalika1234'
  }
});

function sendEmail(email,fullname, url) {
  const options = {
    from: "ardawalikatest@gmail.com",
    to: email,
    subject: "Verification Email",
    html : `<h1>Email Confirmation</h1>
    <h2>Hello ${fullname}</h2>
    <p>Please confirm your email by clicking on the following link</p>
    <a href=${url}> Click here</a>
    </div>`
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success mengirim email");
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
