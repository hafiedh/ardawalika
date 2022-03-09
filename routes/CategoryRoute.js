const CategoryController = require("../controllers/CategoryController");
const router = require("express").Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategory);

module.exports = router;
