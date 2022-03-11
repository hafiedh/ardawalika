const { Paket } = require("../models");
const { Op } = require("sequelize");

async function createDataPaket(req, res, next) {
  try {
    const obj = JSON.parse(JSON.stringify(req.body));
    const {
      name_paket,
      harga_paket,
      ket_paket,
      dekorasi_id,
      catering_id,
      rias_id,
      category_id,
      dokumentasi_id,
      entertainment_id,
    } = obj;
    const paket = await Paket.create({
      name_paket,
      harga_paket,
      ket_paket,
      dekorasi_id,
      catering_id,
      rias_id,
      category_id,
      dokumentasi_id,
      entertainment_id,
    });
    req.session.paket_id = paket.id;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = createDataPaket;
