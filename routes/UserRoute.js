const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const uploadImage = require("../middlewares/multer");
const imgKit = require("../middlewares/imagekit");
const updateDataUser = require("../middlewares/updateuser");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("INI DI USER ROUTER");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/forgot-password", UserController.forgotPassword);
router.post("/login-google", UserController.googleLogin);
router.get("/verify/:accessToken", UserController.verification);
router.use(authentication);
router.put("/updateData/:accessToken", UserController.updateData);
router.post("/upload-image", updateDataUser, uploadImage, imgKit);

module.exports = router;
