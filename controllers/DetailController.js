const { Category, Paket, PaketCustom } = require("../models");

class DetailController {
  static async getDetail(req, res, next) {
    try {
      if(!req.session.user){
        // alert from backend
        res.redirect("/login?error=Please login first");
        return
      }
      const options = {
        where: {
          id: req.params.id,
        },
        include: ["Dekorasi", "Catering", "Ria", "Category", "Dokumentasi", "Entertainment"],
      };
      const data = await Paket.findAll(options);

      const result_image = data[0].Category.img_paket.split("|");

      const renderData = {
        paket_id: data[0].id,
        paket: data[0],
        dekorasi: data[0].Dekorasi,
        catering: data[0].Catering,
        rias: data[0].Ria,
        category: data[0].Category,
        dokumentasi: data[0].Dokumentasi,
        entertainment: data[0].Entertainment,
        user: req.session.user,
        image: result_image,
      };
      res.render("order", renderData);
    } catch (error) {
      next(error);
    }
  }

 
  static async getPaketCustomDetail(req, res, next) {
    try {
       const options = {
        where: {
          id: req.params.id,
        },
        include: ["Dekorasi", "Catering", "Ria", "Category", "Dokumentasi", "Entertainment"],
      };
      const data = await PaketCustom.findAll(options);

      const result_image = data[0].Category.img_paket.split("|");

      const renderData = {
        paket_id: data[0].id,
        paket: data[0],
        dekorasi: data[0].Dekorasi,
        catering: data[0].Catering,
        rias: data[0].Ria,
        category: data[0].Category,
        dokumentasi: data[0].Dokumentasi,
        entertainment: data[0].Entertainment,
        user: req.session.user,
        image: result_image,
      };
      res.render("ordercustom", renderData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DetailController;
