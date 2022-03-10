const AdminController = require("../controllers/AdminController");
const router = require("express").Router();

router.get('/dashboard',AdminController.viewDashboard)
module.exports = router;