const { Category } = require("../models");

class HomeController {
  static async getHome(req, res, next) {
    try {
      const data = await Category.findAll();
      console.log(req.session.user);
      if (!req.session.user) {
        const user = null;
        res.render("index", { data, user });
      } else {
        const user = req.session.user;
        res.render("index", { data, user });
      }
      // if (req.session) {
      //   navbar = req.session.navbar;
      //   res.render("index", { data, navbar });
      // } else {
      //   res.render("index", { data, navbar });
      // }
    } catch (error) {
      next(error);
    }
  }
  static async getDokumentasi(req, res, next) {
    try {
      const user = req.session.user;
      console.log(user);
      res.render("dokumentasi", { user });
    } catch (error) {
      next(error);
    }
  }

  static async getDokumentasiDetail(req, res, next) {
    try {
      const user = req.session.user;
      console.log(user);
      res.render("dokumentasi_detail", { user });
    } catch (error) {
      next(error);
    }
  }

  static async getAbout(req, res, next) {
    try {
      const user = req.session.user;
      console.log(user);
      res.render("tentang-kami", { user });
    } catch (error) {
      next(error);
    }
  }
  static async getKonfirmasi(req, res, next) {
    try {
      const user = req.session.user;
      console.log(user);
      res.render("konfirmasi", { user });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = HomeController;
