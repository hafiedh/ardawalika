const ProductController = require("../controllers/ProductController");
const router = require("express").Router();


router.get("/decoration", ProductController.getDecorations);
router.get("/decoration/:id", ProductController.getDecorationById);
router.post("/decoration",ProductController.createDecoration);
router.put("/decoration/:id",ProductController.updateDecoration);
router.delete("/decoration/:id",ProductController.deleteDecoration);

router.get("/documentation", ProductController.getDocumentations);
router.get("/documentation/:id", ProductController.getDocumentationById);
router.post("/documentation",ProductController.createDocumentation);
router.put("/documentation/:id",ProductController.updateDocumentation);
router.delete("/documentation/:id",ProductController.deleteDocumentation);

router.get("/entertainment", ProductController.getEntertainments);
router.get("/entertainment/:id", ProductController.getEntertainmentById);
router.post("/entertainment",ProductController.createEntertainment);
router.put("/entertainment/:id",ProductController.updateEntertainment);
router.delete("/entertainment/:id",ProductController.deleteEntertainment);

router.get("/rias", ProductController.getRias);
router.get("/rias/:id", ProductController.getRiasById);
router.post("/rias",ProductController.createRias);
router.put("/rias/:id",ProductController.updateRias);
router.delete("/rias/:id",ProductController.deleteRias);

router.get("/catering", ProductController.getCaterings);
router.get("/catering/:id", ProductController.getCateringById);
router.post("/catering",ProductController.createCatering);
router.put("/catering/:id",ProductController.updateCatering);
router.delete("/catering/:id",ProductController.deleteCatering);



module.exports = router;