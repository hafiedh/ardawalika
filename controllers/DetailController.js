const { Category, Paket, PaketCustom } = require("../models");

class DetailController {
  static async getDetail(req, res, next) {
    try {
      //     Paket.belongsTo(models.Dekorasi, { foreignKey: "dekorasi_id" });
      //   Paket.belongsTo(models.Catering, { foreignKey: "catering_id" });
      //   Paket.belongsTo(models.Rias, { foreignKey: "rias_id" });
      //   Paket.belongsTo(models.Category, { foreignKey: "category_id" });
      //   Paket.belongsTo(models.Dokumentasi, { foreignKey: "dokumentasi_id" });
      //   Paket.belongsTo(models.Entertainment, {foreignKey: "entertainment_id",});
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

      // res.status(200).json(renderData);
      res.render("order", renderData);
    } catch (error) {
      next(error);
    }
  }

  static async getPaketCustomDetail(req, res, next) {
    try {
      const options = {
        where: { id: req.params.id },
        include: ["Dekorasi", "Catering", "Ria", "Category", "Dokumentasi", "Entertainment"],
      };
      const data = await PaketCustom.findOne(options);
      const renderData = {
        paket_id: data.id,
        name_paket: data.name_paket,
        dekorasi: data.Dekorasi,
        catering: data.Catering,
        rias: data.Ria,
        category: data.Category,
        dokumentasi: data.Dokumentasi,
        entertainment: data.Entertainment,
      };
      res.render("order", renderData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DetailController;
