const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");
const ProductRouter = require("./ProductRoute");
const CategoryRouter = require("./CategoryRoute");
const PaketRoute = require("./PaketRoute");
const OrderRoute = require("./OrderRoute");

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
router.use(errorHandler);

router.get("/", CategoryController.getCategories);

// // WEDDING ROUTES //
// router.get("/:id", PaketController.getPaket);

// DOKUMENTASI ROUTES //
router.get("/dokumentasi", (req, res) => {
  res.render("dokumentasi");
  console.log("dokumentasi");
});

// KORPORASI ROUTES //
router.get("/korporasi", (req, res) => {
  res.render("korporasi");
  console.log("korporasi");
});

// KELUARGA ROUTES //
router.get("/keluarga", (req, res) => {
  res.render("keluarga");
  console.log("keluarga");
});

//LOGIN ROUTES
router.get("/login", (req, res) => {
  let error = "";
  if (req.query.error) {
    error = req.query.error;
    res.render("login", { error: req.query.error });
  } else {
    res.render("login", { error: error });
  }
  console.log("login");
});

//REGISTER ROUTES
router.get("/register", (req, res) => {
  res.render("register");
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

// About Us
router.get("/tentang-kami", (req, res) => {
  res.render("tentang-kami");
  console.log("tentang-kami");
});

// TES DETAIL DOKUMENTASI //
router.get("/dokumentasi-detail", (req, res) => {
  res.render("dokumentasi_detail");
  console.log("dokumentasi-detail");
});

// tesDates //
router.get("/konfirmasi", (req, res) => {
  res.render("konfirmasi");
  console.log("konfirmasi");
});

// tesDates //
router.get("/konfirmasi", (req, res) => {
  res.render("konfirmasi");
  console.log("konfirmasi");
});

module.exports = router;
