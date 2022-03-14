const OrderController = require("../controllers/OrderController");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.get("/allComponent", OrderController.getAllPaketComponent);
router.post("/notification", OrderController.handleNotification);
router.get("/history", OrderController.history);
router.get("/historyCustom", OrderController.historyCustom);
router.post("/chargecustom", OrderController.createOrderCustom);
router.post("/charge", OrderController.createOrder);
router.get("/tracking/:id", OrderController.tracking);
router.get("/detail/:id", OrderController.detail);
router.get("editacara/:id", OrderController.editTanggal)
router.get("/checkout/:paket_id/:total_harga", OrderController.checkoutPage);
router.get("/checkoutcustom/:paket_id/:total_harga", OrderController.customCheckoutPage);



module.exports = router;
