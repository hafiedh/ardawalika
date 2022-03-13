const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");
const ProductRouter = require("./ProductRoute");
const CategoryRouter = require("./CategoryRoute");
const PaketRoute = require("./PaketRoute");
const OrderRoute = require("./OrderRoute");
const HomeRoute = require("./HomeRoute");

const AdminRouter = require("./AdminRoute");
const CategoryController = require("../controllers/CategoryController");
const DetailController = require("../controllers/DetailController");
const { route } = require("./OrderRoute");
const { render } = require("ejs");

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);
router.use("/pakets", PaketRoute);
router.use("/admin", AdminRouter);
router.use("/orders", OrderRoute);
router.use("/detail/:id", DetailController.getDetail);
router.use("/customdetail/:id", DetailController.getPaketCustomDetail);
router.use(errorHandler);

router.use("/", HomeRoute);

//LOGIN ROUTES
router.get("/login", (req, res) => {
  let error = "";
  if (req.query.error) {
    error = req.query.error;
  }
  res.render("login", { error });
  console.log("login");
});

//REGISTER ROUTES
router.get("/register", (req, res) => {
  let error = "";
  if (req.query.error) {
    error = req.query.error;
  }
  res.render("register", { error });
  console.log("register");
});

//RESET EMAIL ROUTES
router.get("/resetemail", (req, res) => {
  res.render("resetemail");
  console.log("resetemail");
});

//RESET PASSWORD ROUTES
router.get("/resetpass", (req, res) => {
  res.render("resetpass");
  console.log("resetpass");
});

//PASSWORD TELAH DIUBAH ROUTES
router.get("/resetdone", (req, res) => {
  res.render("resetdone");
  console.log("resetdone");
});

// tes kustomisasi //
router.get("/kostumisasi", (req, res) => {
  res.render("kostumisasi");
  console.log("kustomisasi");
});

module.exports = router;
