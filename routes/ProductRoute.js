const ProductController = require("../controllers/ProductController");
const router = require("express").Router();


router.get("/decoration", ProductController.getDecorations);
router.post("/decoration",ProductController.createDecoration);
router.put("/decoration/:id",ProductController.updateDecoration);
router.delete("/decoration/:id",ProductController.deleteDecoration);

router.get("/documentation", ProductController.getDocumentations);
router.post("/documentation",ProductController.createDocumentation);
router.put("/documentation/:id",ProductController.updateDocumentation);
router.delete("/documentation/:id",ProductController.deleteDocumentation);

router.get("/entertainment", ProductController.getEntertainments);
router.post("/entertainment",ProductController.createEntertainment);
router.put("/entertainment/:id",ProductController.updateEntertainment);
router.delete("/entertainment/:id",ProductController.deleteEntertainment);

router.get("/rias", ProductController.getRias);
router.post("/rias",ProductController.createRias);
router.put("/rias/:id",ProductController.updateRias);
router.delete("/rias/:id",ProductController.deleteRias);

router.get("/catering", ProductController.getCaterings);
router.post("/catering",ProductController.createCatering);
router.put("/catering/:id",ProductController.updateCatering);
router.delete("/catering/:id",ProductController.deleteCatering);



module.exports = router;