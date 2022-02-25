const passport = require("passport");

class GoogleAuthController {
  static getLogin(req, res, next) {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
  }
}

module.exports = GoogleAuthController;
