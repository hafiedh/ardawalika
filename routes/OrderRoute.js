const OrderController = require("../controllers/OrderController");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.post("/notification", OrderController.handleNotification);
router.get("/history", OrderController.history);
router.get("/tracking/:id", OrderController.tracking);
router.get("/detail/:id", OrderController.detail);
router.get("editacara/:id", OrderController.editTanggal)
router.post("/chargeCustom/:paket_id", OrderController.crateOrderCustom)
router.post("/charge/:paket_id/:totalharga", OrderController.createOrder);


module.exports = router;
