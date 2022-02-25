const passport = require("passport");
const { User } = require("../models");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "868113271559-ec5iaif5jnal38vbas8gbr67n1kqhevn.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      try {
        User.findOne({
          where: {
            email: profile._json.email,
          },
        }).then(function (e) {
          console.log(e);
          if (e) {
            return done(null, profile._json, { message: "done" });
          } else {
            return done(null, false, { message: "gagal Login" });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  )
);
