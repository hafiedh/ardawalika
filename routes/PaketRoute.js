const Paket = require("../controllers/PaketController");
const router = require("express").Router();

router.get("/", Paket.getPakets);
router.get("/:id", Paket.getPaket);
router.post("/", Paket.createPaket);
router.put("/:id", Paket.updatePaket);
router.delete("/:id", Paket.deletePaket);

module.exports = router;
