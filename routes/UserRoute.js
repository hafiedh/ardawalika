const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("INI DI USER ROUTER");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/forgot-password", UserController.forgotPassword);
router.use(authentication);
router.get("/verify/:accessToken", UserController.verification);
router.put("/updateData/:accessToken", UserController.updateData);

module.exports = router;
