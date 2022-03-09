const PaketController = require("../controllers/PaketController");
const router = require("express").Router();

router.get("/", PaketController.getPakets);
router.get("/:id", PaketController.getPaket);
router.post("/", PaketController.createPaket);
router.put("/:id", PaketController.updatePaket);
router.delete("/:id", PaketController.deletePaket);

module.exports = router;
