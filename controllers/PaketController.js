const { Category, Paket, PaketCustom } = require("../models");

class PaketController {
  static async getPakets(req, res, next) {
    try {
      const data = await Paket.findAll();
      res.render("tes", { data });
    } catch (error) {
      next(error);
    }
  }
  static async getPaketsByCategory(req, res, next) {
    try {
      const id = req.params.id;
      const user = req.session.user;
      const data = await Paket.findAll({
        where: {
          category_id: id,
        },
      });
      const dataCategory = await Category.findAll({
        where: {
          id,
        },
      });

      const result_layanan = [];
      const result_iconlayanan = [];

      await dataCategory.map((e) => {
        const data = e.ket_layanan;
        const dataicon = e.icon_layanan;

        const result = data.split("|");
        const resulticon = dataicon.split("|");

        result_layanan.push(result);
        result_iconlayanan.push(resulticon);
      });

      res.render("paket", { user, data, dataCategory, result_layanan, result_iconlayanan });
      // res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getPaket(req, res, next) {
    try {
      const id = req.params.id;
      const data = await Paket.findOne({
        where: {
          id,
        },
      });
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async createPaket(req, res, next) {
    try {
      const data = await Paket.create({
        name_paket: req.body.name_paket,
        harga_paket: req.body.harga_paket,
        dekorasi_id: req.body.dekorasi_id,
        catering_id: req.body.catering_id,
        rias_id: req.body.body.rias_id,
        dokumentasi_id: req.body.dokumentasi_id,
        entertainment_id: req.body.entertainment_id,
      });
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  static async updatePaket(req, res, next) {
    try {
      const id = req.params.id;
      const { name_paket, harga_paket, dekorasi_id, catering_id, rias_id, dokumentasi_id, entertainment_id, category_id } = req.body;
      const data = {
        name_paket,
        harga_paket,
        dekorasi_id,
        catering_id,
        rias_id,
        dokumentasi_id,
        entertainment_id,
        category_id,
      };

      const updated = await Paket.update(data, {
        where: {
          id,
        },
        returning: true,
      });
      res.status(200).json({ updated });
    } catch (error) {
      next(error);
    }
  }
  static async deletePaket(req, res, next) {
    try {
      const id = req.params.id;
      const data = Paket.deletePaket({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `Paket ${id} berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updatePaket(req, res, next) {
    try {
      const id = req.session.paket_id;
      const img_url = req.body.image;
      await Paket.update(
        {
          img_url,
        },
        {
          where: {
            id,
          },
        }
      );
      res.redirect("/admin/paket");
    } catch (error) {
      next(error);
    }
  }

  static async customPaket(req, res, next) {
    try {
      const { name_paket, dekorasi_id, catering_id, rias_id, dokumentasi_id, entertainment_id, category_id } = req.body;
      const data = await PaketCustom.create({
        name_paket,
        dekorasi_id,
        catering_id,
        rias_id,
        dokumentasi_id,
        entertainment_id,
        category_id,
      });
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaketController;
