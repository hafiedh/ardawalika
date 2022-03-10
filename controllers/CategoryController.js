const { Category } = require("../models");

class CategoryController {
  static async getCategories(req, res, next) {
    try {
      const data = await Category.findAll();
      res.render("index", { data });
      // res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getCategory(req, res, next) {
    try {
      const id = req.params.id;
      const data = await Category.findOne({
        where: {
          id,
        },
      });
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
