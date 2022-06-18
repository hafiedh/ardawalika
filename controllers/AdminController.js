const { Dekorasi, Dokumentasi, Entertainment, Rias, Catering, User, Category, Paket, Order } = require("../models");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/index");
  },

  viewDecoration: async (req, res) => {
    const dekorasi = await Dekorasi.findAll();
    res.render("admin/dekorasi/index", {
      dekorasi,
    });
  },

  createDecoration: async (req, res) => {
    try {
      const { name_dekorasi, harga_dekorasi, keterangan_dekorasi } = req.body;

      await Dekorasi.create({
        name_dekorasi,
        harga_dekorasi,
        keterangan_dekorasi,
      });
      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },
  updateDecoration: async (req, res) => {
    try {
      const { id, name_dekorasi, harga_dekorasi, keterangan_dekorasi } = req.body;
      const dekorasi = await Dekorasi.findByPk(id);

      (dekorasi.name_dekorasi = name_dekorasi), (dekorasi.harga_dekorasi = harga_dekorasi), (dekorasi.keterangan_dekorasi = keterangan_dekorasi), await dekorasi.save();

      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },
  deleteDecoration: async (req, res) => {
    try {
      await Dekorasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/dekorasi");
    } catch (error) {
      res.redirect("/admin/dekorasi");
    }
  },


  viewCatering: async (req, res) => {
    const catering = await Catering.findAll();
    res.render("admin/catering/index", {
      catering,
    });
  },
  createCatering: async (req, res) => {
    try {
      const { name_catering, harga_catering, keterangan_catering } = req.body;

      await Catering.create({
        name_catering,
        harga_catering,
        keterangan_catering,
      });
      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },
  updateCatering: async (req, res) => {
    try {
      const { id, name_catering, harga_catering, keterangan_catering } = req.body;
      const catering = await Catering.findByPk(id);

      (catering.name_catering = name_catering), (catering.harga_catering = harga_catering), (catering.keterangan_catering = keterangan_catering), await catering.save();

      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },
  deleteCatering: async (req, res) => {
    try {
      await Catering.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/catering");
    } catch (error) {
      res.redirect("/admin/catering");
    }
  },


  viewRias: async (req, res) => {
    const rias = await Rias.findAll();
    res.render("admin/rias/index", {
      rias,
    });
  },
  createRias: async (req, res) => {
    try {
      const { name_rias, harga_rias, keterangan_rias } = req.body;

      await Rias.create({
        name_rias,
        harga_rias,
        keterangan_rias,
      });
      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },
  updateRias: async (req, res) => {
    try {
      const { id, name_rias, harga_rias, keterangan_rias } = req.body;
      const rias = await Rias.findByPk(id);

      (rias.name_rias = name_rias), (rias.harga_rias = harga_rias), (rias.keterangan_rias = keterangan_rias), await rias.save();

      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },
  deleteRias: async (req, res) => {
    try {
      await Rias.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/rias");
    } catch (error) {
      res.redirect("/admin/rias");
    }
  },

  viewDokumentasi: async (req, res) => {
    const dokumentasi = await Dokumentasi.findAll();
    res.render("admin/dokumentasi/index", {
      dokumentasi,
    });
  },
  createDokumentasi: async (req, res) => {
    try {
      const { name_dokumentasi, harga_dokumentasi, keterangan_dokumentasi } = req.body;

      await Dokumentasi.create({
        name_dokumentasi,
        harga_dokumentasi,
        keterangan_dokumentasi,
      });
      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },
  updateDokumentasi: async (req, res) => {
    try {
      const { id, name_dokumentasi, harga_dokumentasi, keterangan_dokumentasi } = req.body;
      const dokumentasi = await Dokumentasi.findByPk(id);

      (dokumentasi.name_dokumentasi = name_dokumentasi), (dokumentasi.harga_dokumentasi = harga_dokumentasi), (dokumentasi.keterangan_dokumentasi = keterangan_dokumentasi), await dokumentasi.save();

      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },
  deleteDokumentasi: async (req, res) => {
    try {
      await Dokumentasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/dokumentasi");
    } catch (error) {
      res.redirect("/admin/dokumentasi");
    }
  },

  viewEntertainment: async (req, res) => {
    const entertainment = await Entertainment.findAll();
    res.render("admin/entertainment/index", {
      entertainment,
    });
  },
  createEntertainment: async (req, res) => {
    try {
      const { name_entertainment, harga_entertainment, keterangan_entertainment } = req.body;

      await Entertainment.create({
        name_entertainment,
        harga_entertainment,
        keterangan_entertainment,
      });
      res.redirect("/admin/entertainment");
    } catch (error) {
      res.redirect("/admin/entertainment");
    }
  },
  updateEntertainment: async (req, res) => {
    try {
      const { id, name_entertainment, harga_entertainment, keterangan_entertainment } = req.body;
      const entertainment = await Entertainment.findByPk(id);

      (entertainment.name_entertainment = name_entertainment), (entertainment.harga_entertainment = harga_entertainment), (entertainment.keterangan_entertainment = keterangan_entertainment), await entertainment.save();

      res.redirect("/admin/entertainment");
    } catch (error) {
      res.redirect("/admin/entertainment");
    }
  },
  deleteEntertainment: async (req, res) => {
    try {
      await Entertainment.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/entertainment");
    } catch (error) {
      res.redirect("/admin/entertainment");
    }
  },

  viewUser: async (req, res) => {
    const user = await User.findAll();
    res.render("admin/user/index", {
      user,
    });
  },

  viewCategory: async (req, res) => {
    const category = await Category.findAll();
    res.render("admin/category/index", {
      category,
    });
  },
  viewCreateCategory: async (req, res) => {
    res.render("admin/category/create");
  },

  viewPaket: async (req, res) => {
    const paket = await Paket.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Dekorasi,
          attributes: ["name_dekorasi"],
        },
        {
          model: Rias,
          attributes: ["name_rias"],
        },
        {
          model: Entertainment,
          attributes: ["name_entertainment"],
        },
        {
          model: Catering,
          attributes: ["name_catering"],
        },
        {
          model: Dokumentasi,
          attributes: ["name_dokumentasi"],
        },
      ],
    });
    res.render("admin/paket/index", {
      paket,
    });
  },

  viewCreatePaket: async (req, res) => {
    try {
      const category = await Category.findAll();
      const dekorasi = await Dekorasi.findAll();
      const rias = await Rias.findAll();
      const entertainment = await Entertainment.findAll();
      const dokumentasi = await Dokumentasi.findAll();
      const catering = await Catering.findAll();

      res.render("admin/paket/create", {
        dekorasi,
        category,
        rias,
        entertainment,
        dokumentasi,
        catering,
      });
    } catch (error) {
      res.redirect("/");
    }
  },

  createPaket: async (req, res, next) => {
    try {
      const data = await Paket.create({
        name_paket: req.body.name_paket,
        ket_paket: req.body.ket_paket,
        harga_paket: req.body.harga_paket,
        des_paket: req.body.des_paket,
        category_id: req.body.category_id,
        dekorasi_id: req.body.dekorasi_id,
        catering_id: req.body.catering_id,
        rias_id: req.body.rias_id,
        dokumentasi_id: req.body.dokumentasi_id,
        entertainment_id: req.body.entertainment_id,
        img_url: req.body.image,
      });
      res.redirect("/admin/paket");
    } catch (error) {
      next(error);
    }
  },
  viewEditPaket: async (req, res) => {
    const idPaket = req.params.id;
    try {
      const category = await Category.findAll();
      const dekorasi = await Dekorasi.findAll();
      const rias = await Rias.findAll();
      const entertainment = await Entertainment.findAll();
      const dokumentasi = await Dokumentasi.findAll();
      const catering = await Catering.findAll();
      const paket = await Paket.findByPk(idPaket);

      res.render("admin/paket/edit", {
        dekorasi,
        category,
        rias,
        entertainment,
        dokumentasi,
        catering,
        paket,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
  updatePaket: async (req, res) => {
    const idPaket = req.params.id;
    try {
      const { id, name_paket, ket_paket, harga_paket, category_id, dekorasi_id, catering_id, dokumentasi_id, entertainment_id, image } = req.body;
      const paket = await Paket.findByPk(idPaket);

      (paket.name_paket = name_paket),
        (paket.ket_paket = ket_paket),
        (paket.harga_paket = harga_paket),
        (paket.category_id = category_id),
        (paket.dekorasi_id = dekorasi_id),
        (paket.catering_id = catering_id),
        (paket.dokumentasi_id = dokumentasi_id),
        (paket.entertainment_id = entertainment_id),
        (paket.img_url = image);

      await paket.save();

      res.redirect("/admin/paket");
    } catch (error) {
      res.redirect("/admin/paket");
    }
  },
  deletePaket: async (req, res) => {
    try {
      await Paket.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/admin/paket");
    } catch (error) {
      res.redirect("/admin/paket");
    }
  },

  viewOrder: async (req, res) => {
    const order = await Order.findAll({
      include: [
        {
          model: User,
        },

        {
          model: Paket,
        },
      ],
    });
    res.render("admin/order/index", {
      order,
    });
  },

    adminLogout: async (req, res, next) => {
    try {
      req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/login");
      });
    } catch (error) {
      next(error);
    }
  }
};
