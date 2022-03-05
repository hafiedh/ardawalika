const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");

router.use("/users", UserRouter);
router.use(errorHandler);

router.get("/", (req, res) => {
    res.render("index")
    console.log("index")
})

// DOKUMENTASI ROUTES //
router.get("/dokumentasi", (req, res) => {
    res.render("dokumentasi")
    console.log("dokumentasi")
})

// WEDDING ROUTES //
router.get("/wedding", (req, res) => {
    res.render("wedding")
    console.log("wedding")
})

// KORPORASI ROUTES //
router.get("/korporasi", (req, res) => {
    res.render("korporasi")
    console.log("korporasi")
})

// KELUARGA ROUTES //
router.get("/keluarga", (req, res) => {
    res.render("keluarga")
    console.log("keluarga")
})

// ORDER ROUTES //
router.get("/order", (req, res) => {
    res.render("order")
    console.log("keluarga")
})

module.exports = router;
