const { Pakets } = require("../models");

class PaketController {
  static async getPakets(req, res, next) {
    try {
      const data = await Pakets.findAll();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getPaket(req, res, next) {
    try {
      const id = req.params.id;
      const data = await Pakets.findOne({
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
      const data = await Pakets.create({
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

      const updated = await Pakets.update(data, {
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
      const data = Pakets.deletePaket({
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
}

module.exports = PaketController;
