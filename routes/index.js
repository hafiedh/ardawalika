const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");
const GoogleRouter = require("./GoogleRoute");

router.use("/users", UserRouter);
router.use("/auth/google", GoogleRouter);
router.use(errorHandler);

router.get("/", (req, res) => {
    res.render("index")
    console.log("index")
})

router.get("/dokumentasi", (req, res) => {
    res.render("dokumentasi")
    console.log("dokumentasi")
})

module.exports = router;
