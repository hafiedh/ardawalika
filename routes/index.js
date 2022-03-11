const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");
const ProductRouter = require("./ProductRoute");
const CategoryRouter = require("./CategoryRoute");
const PaketRoute = require("./PaketRoute");

const AdminRouter = require("./AdminRoute");
const CategoryController = require("../controllers/CategoryController");

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);
router.use("/pakets", PaketRoute);
router.use("/admin", AdminRouter);
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

// ORDER ROUTES //
router.get("/order", (req, res) => {
  res.render("order");
  console.log("order");
});

//LOGIN ROUTES
router.get("/login", (req, res) => {
  res.render("login");
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

// Riwayat Pemesanan
router.get("/riwayat-pemesanan", (req, res) => {
  res.render("riwayat-pemesanan");
  console.log("riwayat-pemesanan");
});

// TES DETAIL DOKUMENTASI //
router.get("/dokumentasi-detail", (req, res) => {
  res.render("dokumentasi_detail");
  console.log("dokumentasi-detail");
});

module.exports = router;
