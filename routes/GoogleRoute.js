const passport = require("passport");
const cookieSession = require("cookie-session");
const app = require("express");
const GoogleAuthController = require("../controllers/GoogleAuthController");
require("../helpers/googleAuth");
const router = app.Router();

router.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

router.use(passport.initialize());
router.use(passport.session());

router.get("/", GoogleAuthController.getLogin);
router.get("/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
