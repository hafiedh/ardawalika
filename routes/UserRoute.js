const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const upload = require("../middlewares/multer");
const imgKit = require("../middlewares/imagekit");
const updateDataUser = require("../middlewares/updatedatauser");
const compressBuffer = require("../middlewares/compressBuffer");
const router = require("express").Router();
const resize = require("../helpers/jimp");

router.get("/", (req, res) => {
  res.send("INI DI USER ROUTER");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/forgot-password", UserController.forgotPassword);
router.post("/login-google", UserController.googleLogin);
router.get("/verify/:accessToken", UserController.verification);
router.use(authentication);
router.post(
  "/update-profile",
  function (req, res, next) {
    upload.single("name")(req, res, function (error) {
      if (error) {
        next(error);
      }
      next();
    });
  },
  compressBuffer,
  updateDataUser,
  imgKit,
  UserController.updateUserPhoto
);
router.get("/logout", UserController.logout);
router.get("/profile/:id", UserController.getProfile);

module.exports = router;
