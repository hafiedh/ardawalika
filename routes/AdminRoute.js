const AdminController = require("../controllers/AdminController");
const router = require("express").Router();

router.get('/user',AdminController.viewUser)

router.get('/dashboard',AdminController.viewDashboard)
router.get('/dekorasi',AdminController.viewDecoration)
router.post('/dekorasi',AdminController.createDecoration)
router.put('/dekorasi',AdminController.updateDecoration)
router.delete("/dekorasi/:id",AdminController.deleteDecoration)

router.get('/catering',AdminController.viewCatering)
router.post('/catering',AdminController.createCatering)
router.put('/catering',AdminController.updateCatering)
router.delete('/catering/:id',AdminController.deleteCatering)

router.get('/rias',AdminController.viewRias)
router.post('/rias',AdminController.createRias)
router.put('/rias',AdminController.updateRias)
router.delete('/rias/:id',AdminController.deleteRias)

router.get('/dokumentasi',AdminController.viewDokumentasi)
router.post('/dokumentasi',AdminController.createDokumentasi)
router.put('/dokumentasi',AdminController.updateDokumentasi)
router.delete('/dokumentasi/:id',AdminController.deleteDokumentasi)

router.get('/entertainment',AdminController.viewEntertainment)
router.post('/entertainment',AdminController.createEntertainment)
router.put('/entertainment',AdminController.updateEntertainment)
router.delete('/entertainment/:id',AdminController.deleteEntertainment)

router.get('/category',AdminController.viewCategory)
router.get('/category/create',AdminController.viewCreateCategory)

router.get('/paket',AdminController.viewPaket)
router.get('/paket/create',AdminController.viewCreatePaket)
router.post('/paket',AdminController.createPaket)
module.exports = router;