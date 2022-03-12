const {
  Dekorasi,
  Dokumentasi,
  Entertainment,
  Rias,
  Catering,
} = require("../models");

class ProductController {
  static async getDecorationById(req, res, next) {
    try {
      const id = req.params.id;
      const dekorasi = await Dekorasi.findByPk(id);
      res.json(dekorasi).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async getDecorations(req, res, next) {
    try {
      const dekorasi = await Dekorasi.findAll();
      res.json(dekorasi).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async createDecoration(req, res, next) {
    try {
      const dekorasi = await Dekorasi.create({
        name_dekorasi: req.body.name_dekorasi,
        harga_dekorasi: req.body.harga_dekorasi,
        keterangan_dekorasi: req.body.keterangan_dekorasi,
        id_paket: req.body.paket,
      });
      res.status(200).json({
        message: "Data berhasil ditambahkan",
        data: dekorasi,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateDecoration(req, res) {
    try {
      const dekorasi = await Dekorasi.update(
        {
          name_dekorasi: req.body.name_dekorasi,
          harga_dekorasi: req.body.harga_dekorasi,
          keterangan_dekorasi: req.body.keterangan_dekorasi,
          id_paket: req.body.paket,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil ubah data dekorasi",
        data: dekorasi,
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteDecoration(req, res) {
    try {
      const dekorasi = await Dekorasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getDocumentations(req, res, next) {
    try {
      const documentations = await Dokumentasi.findAll();
      res.json(documentations).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async getDocumentationById(req, res, next) {
    try {
      const id = req.params.id;
      const dokumentasi = await Dokumentasi.findByPk(id);
      res.json(dokumentasi).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async createDocumentation(req, res, next) {
    try {
      const documentation = await Dokumentasi.create({
        name_dokumentasi: req.body.name_dokumentasi,
        harga_dokumentasi: req.body.harga_dokumentasi,
        keterangan_dokumentasi: req.body.keterangan_dokumentasi,
      });
      res.status(200).json({
        message: "Data berhasil ditambahkan",
        data: documentation,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateDocumentation(req, res) {
    try {
      const documentation = await Dokumentasi.update(
        {
          name_dokumentasi: req.body.name_dokumentasi,
          harga_dokumentasi: req.body.harga_dokumentasi,
          keterangan_dokumentasi: req.body.keterangan_dokumentasi,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil ubah data dekorasi",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteDocumentation(req, res) {
    try {
      const documentation = await Dokumentasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getEntertainments(req, res, next) {
    try {
      const entertainment = await Entertainment.findAll();
      res.json(entertainment).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async getEntertainmentById(req, res, next) {
    try {
      const id = req.params.id;
      const entertainment = await Entertainment.findByPk(id);
      res.json(entertainment).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async createEntertainment(req, res) {
    try {
      const entertainment = await Entertainment.create({
        name_entertainment: req.body.name_entertainment,
        harga_entertainment: req.body.harga_entertainment,
        keterangan_entertainment: req.body.keterangan_entertainment,
      });
      res.status(200).json({
        message: "Data berhasil ditambahkan",
        data: entertainment,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateEntertainment(req, res) {
    try {
      const entertainment = await Entertainment.update(
        {
          name_entertainment: req.body.name_entertainment,
          harga_entertainment: req.body.harga_entertainment,
          keterangan_entertainment: req.body.keterangan_entertainment,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil ubah data dekorasi",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteEntertainment(req, res) {
    try {
      const entertainment = await Entertainment.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      next(error);
    }
  }
  static async getRias(req, res, next) {
    try {
      const rias = await Rias.findAll();
      res.json(rias).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async getRiasById(req, res, next) {
    try {
      const id = req.params.id;
      const rias = await Rias.findByPk(id);
      res.json(rias).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async createRias(req, res) {
    try {
      const rias = await Rias.create({
        name_rias: req.body.name_rias,
        harga_rias: req.body.harga_rias,
        keterangan_rias: req.body.keterangan_rias,
      });
      res.status(200).json({
        message: "Data berhasil ditambahkan",
        data: rias,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateRias(req, res) {
    try {
      const rias = await Rias.update(
        {
          name_rias: req.body.name_rias,
          harga_rias: req.body.harga_rias,
          keterangan_rias: req.body.keterangan_rias,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil ubah data dekorasi",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteRias(req, res) {
    try {
      const rias = await Rias.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCaterings(req, res, next) {
    try {
      const catering = await Catering.findAll();
      res.json(catering).status(200);
    } catch (error) {
      next(error);
    }
  }
  static async getCateringById(req, res, next) {
    try {
      const id = req.params.id;
      const catering = await Catering.findByPk(id);
      res.json(catering).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async createCatering(req, res) {
    try {
      const catering = await Catering.create({
        name_catering: req.body.name_catering,
        harga_catering: req.body.harga_catering,
        keterangan_catering: req.body.keterangan_catering,
      });
      res.status(200).json({
        message: "Data berhasil ditambahkan",
        data: catering,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCatering(req, res) {
    try {
      const catering = await Catering.update(
        {
          name_catering: req.body.name_catering,
          harga_catering: req.body.harga_catering,
          keterangan_catering: req.body.keterangan_catering,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil ubah data dekorasi",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCatering(req, res) {
    try {
      const catering = await Catering.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Berhasil menghapus data",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
