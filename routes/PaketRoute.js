const PaketController = require("../controllers/PaketController");
const router = require("express").Router();
const createDataPaket = require("../middlewares/createdatapaket");
const upload = require("../middlewares/multer");
const imgKit = require("../middlewares/imagekit");

// router.get("/", PaketController.getPakets);
router.post("/", PaketController.createPaket);
router.post(
  "/createPaket",
  function (req, res, next) {
    upload.single("name")(req, res, function (error) {
      if (error) {
        console.log(`upload.single error: ${error}`);
      }
      next();
    });
  },
  createDataPaket,
  imgKit,
  PaketController.updatePaket
);
router.get("/:id", PaketController.getPaketsByCategory);
router.put("/:id", PaketController.updatePaket);
router.delete("/:id", PaketController.deletePaket);

module.exports = router;
