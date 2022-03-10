const PaketController = require("../controllers/PaketController");
const router = require("express").Router();

// router.get("/", PaketController.getPakets);
router.post("/", PaketController.createPaket);
router.get("/:id", PaketController.getPaketsByCategory);
router.put("/:id", PaketController.updatePaket);
router.delete("/:id", PaketController.deletePaket);

module.exports = router;
