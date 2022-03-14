const { Category } = require("../models");

class CategoryController {
  static async getCategories(req, res, next) {
    try {
      let navbar = false;
      const data = await Category.findAll();
      console.log(req.session.user);
      if (!req.session.user) {
        const user = null;
        res.render("index", { data, user });
      } else {
        const user = req.session.user;
        res.render("index", { data, user });
      }
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
