const AdminController = require("../controllers/AdminController");
const router = require("express").Router();

router.get('/dashboard',AdminController.viewDashboard)
router.get('/dekorasi',AdminController.viewDecoration)
router.post('/dekorasi',AdminController.createDecoration)
router.put('/dekorasi',AdminController.updateDecoration)
router.delete("/dekorasi/:id",AdminController.deleteDecoration)

router.get('/catering',AdminController.viewCatering)
router.post('/catering',AdminController.createCatering)
router.put('/catering',AdminController.updateCatering)
router.delete('/catering/:id',AdminController.deleteCatering)
module.exports = router;