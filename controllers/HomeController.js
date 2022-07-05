const { Category } = require("../models");

class HomeController {
  static async getHome(req, res, next) {
    try {
      const data = await Category.findAll();
      if (!req.session.user || !req.user) {
        const user = null;
        res.render("index", { data, user });
      } else {
        const user = req.session.user || req.user;
        res.render("index", { data, user });
      }
    } catch (error) {
      next(error);
    }
  }
  static async getDokumentasi(req, res, next) {
    try {
      let user
      if (req.session.user || req.user) {
         user = req.session.user || req.user
         res.render("dokumentasi", { user });
      }else{
        user = null
        res.render("dokumentasi", { user });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getDokumentasiDetail(req, res, next) {
    try {
      if (!req.session.user || !req.user) {
        const user = null;
        res.render("dokumentasi-detail", { user });
      } else {
        const user = req.session.user || req.user;
      res.render("dokumentasi_detail", { user });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getAbout(req, res, next) {
    try {
      let user
      if (!req.session.user || !req.user) {
        user = null;
        res.render("tentang-kami", { user });
      } else {
        user = req.session.user || req.user;
      res.render("tentang-kami", { user });
      } 
    } catch (error) {
      next(error);
    }
  }
  static async getKonfirmasi(req, res, next) {
    try {
      let user
      if (!req.session.user || !req.user) {
        user = null;
      } else {
        user = req.session.user || req.user;
      res.render("konfirmasi", { user });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = HomeController;
