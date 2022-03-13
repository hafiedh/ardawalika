const HomeController = require("../controllers/HomeController");
const router = require("express").Router();

router.get("/", HomeController.getHome);
router.get("/dokumentasi", HomeController.getDokumentasi);
router.get("/tentang-kami", HomeController.getAbout);
router.get("/dokumentasi-detail", HomeController.getDokumentasiDetail);
router.get("/konfirmasi", HomeController.getKonfirmasi);

module.exports = router;
