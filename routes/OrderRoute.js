const OrderController = require("../controllers/OrderController");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.post("/notification", OrderController.handleNotification);
router.post("/charge/:paket_id/:totalharga", OrderController.createOrder);

module.exports = router;
