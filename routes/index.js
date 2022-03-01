const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const UserRouter = require("./UserRoute");

router.use("/users", UserRouter);
router.use(errorHandler);
router.get("/", (req, res) => {
    res.render("index")
    console.log("index")
})

module.exports = router;
