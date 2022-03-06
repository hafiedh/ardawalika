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

//LOGIN ROUTES
router.get("/login", (req, res) => {
    res.render("login")
    console.log("login")
})

//REGISTER ROUTES
router.get("/register", (req, res) => {
    res.render("register")
    console.log("register")
})

//RESET EMAIL ROUTES
router.get("/resetemail", (req, res) => {
    res.render("resetemail")
    console.log("resetemail")
})

//RESET PASSWORD ROUTES
router.get("/resetpass", (req, res) => {
    res.render("resetpass")
    console.log("resetpass")
})

//PASSWORD TELAH DIUBAH ROUTES
router.get("/resetdone", (req, res) => {
    res.render("resetdone")
    console.log("resetdone")
})

module.exports = router;
