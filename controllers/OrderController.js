const { Order, Paket, Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment, PaketCustom} = require("../models");
const midtransClient = require("midtrans-client");
const { Op } = require("sequelize");
const uuid = require("uuid");


let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY || "SB-Mid-server-4pJKsKUlFxNBCuYEjg4yJ85w" ,
  clientKey: process.env.MIDTRANS_CLIENT_KEY || "SB-Mid-client-IzpeIseynV_1r_km",
});

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const order_id = uuid.v4()
      const { id, email, fullname, phoneNumber, address } = req.user;
      const { tanggal_acara, nama_bank, total_harga, paket_id, nomor_rekening } = req.body;
      const paket = await Paket.findOne({
        where: { id: paket_id },
      });

      if (!paket) throw { status: 404, message: "Paket not found" };

      const result = await Order.create({
        name_order: paket.name_paket,
        user_id: id,
        paket_id: paket_id,
        tanggal_acara: tanggal_acara,
        riwayat_pesanan: new Date(),
        total_harga: total_harga,
        midtrans_response: null
      });

      if (!result) throw { status: 400, message: "Register failed" };

      const data = {
        payment_type: "bank_transfer",
        bank_transfer: {
          bank: nama_bank,
        },
        transaction_details: {
          order_id: order_id,
          gross_amount: total_harga,
        },
        item_details: {
          id: paket_id,
          price: total_harga,
          quantity: 1,
          name: paket.name_paket,
        },
        customer_details: {
          fullname: fullname,
          email: email,
          phone: phoneNumber,
          address: address,
          rekening: nomor_rekening
        },
      };
      const charge = await coreApi.charge(data);
      if (charge.status_code === "200" || charge.status_code === "201") {
        const update = await Order.update(
          { midtrans_response: JSON.stringify(charge) },
          { where: { 
            id: result.id,
           }}
        );
        const user = req.session.user;
        res.redirect("/orders/history");
      } else {
        throw { status: 400, message: "Charge failed" };
      }
    } catch (err) {
      next(err);
    }
  }

  static async createOrderCustom(req,res,next) {
    try {
      const order_id = uuid.v4()
      const { id, email, fullname, phoneNumber, address } = req.user;
      const { tanggal_acara, nama_bank, total_harga, paket_id, nomor_rekening } = req.body;

      const paket = await PaketCustom.findOne({
        attributes: {exclude: ["createdAt", "updateAt"]},
        where: { id: paket_id },
         include:[Dekorasi, Catering, Rias, Dokumentasi, Entertainment]
      })
      if (!paket) throw { status: 404, message: "Paket not found" };

     const result = await Order.create({
        name_order: paket.name_paket,
        user_id: id,
        paket_custom_id: paket_id,
        tanggal_acara: tanggal_acara,
        riwayat_pesanan: new Date(),
        total_harga: total_harga,
        midtrans_response: null
      });
     
     if (!result) throw { status: 400, message: "Register failed" };
      const data = {
        payment_type: "bank_transfer",
        bank_transfer: {
          bank: nama_bank,
        },
        transaction_details: {
          order_id: order_id,
          gross_amount: total_harga,
        },
        item_details: {
          id: paket_id,
          price: total_harga,
          quantity: 1,
          name: paket.name_paket,
        },
        customer_details: {
          fullname: fullname,
          email: email,
          phone: phoneNumber,
          address: address,
          rekening: nomor_rekening
        },
      };
       const charge = await coreApi.charge(data);
      if (charge.status_code === "200" || charge.status_code === "201") {
        const update = await Order.update(
          { midtrans_response: JSON.stringify(charge) },
          { where: { 
            id: result.id,
           }}
        );
        const user = req.session.user;
        res.redirect("/orders/historycustom");
      } else {
        throw { status: 400, message: "Charge failed" };
      }
    } catch (err) {
      next(err);
    }
  }
  static async handleNotification(req, res, next) {
    try {

    } catch (error) {
      next(error);
    }
  }

  static async history(req, res, next) {
    try {
      const { id } = req.user;
      // joint table order and paket to get image paket
      const orders = await Order.findAll({
        where: { user_id: id },
        attributes: { exclude: ["createdAt", "updateAt"] },
        include: [Paket],
      });
      if (!orders) throw { status: 404, message: "Orders not found" };
      // iterate paket in order.paket to get image paket
     
      const data = orders.map((item) => {
        return {
          id: item.id,
          user_id: item.user_id,
          paket_id: item.paket_id,
          img_url: item.Paket.img_url,
          name_order: item.name_order,
          tanggal_acara: item.tanggal_acara,
          riwayat_pesanan: item.riwayat_pesanan.toString().substring(0, 10),
          total_harga: item.total_harga.toString(),
          midtrans_response: JSON.parse(item.midtrans_response),
        };
      });
       const user = req.session.user;
      if(data.length === 0){
        res.render("paketkosong", {user});
      }else{
       res.render("riwayat-pemesanan", { orders: data, user });
      }
     
    } catch (error) {
      next(error);
    }
  }

    static async historyCustom(req, res, next) {
    try {
      const { id } = req.user;
      const result = await Order.findAll({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { [Op.and]: [{ user_id: id }, { paket_custom_id: { [Op.ne]: null } }] },
      });
      const data = result.map((item) => {
        return {
          id: item.id,
          user_id: item.user_id,
          paket_id: item.paket_custom_id,
          name_order: item.name_order,
          tanggal_acara: item.tanggal_acara,
          riwayat_pesanan: item.riwayat_pesanan.toString().substring(0, 10),
          total_harga: item.total_harga.toString(),
          midtrans_response: JSON.parse(item.midtrans_response),
        };
      });
       const user = req.session.user;
      if(data.length === 0){
        res.render("paketkosong",{user});
      }else{
       res.render("riwayat-pemesanan-custom", { orders: data, user });
      }
     
    } catch (error) {
      next(error);
    }
  }

  static async tracking(req, res, next) {
    try {
      const { id } = req.params;
      const order = await Order.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { id: id },
      })
      if (!order) throw { status: 404, message: "Order not found" };
      const paket = await Paket.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { [Op.or]: [{ id: order.paket_id }, { id: order.paket_custom_id }] },
        include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment],
      })
      let data = {}
      if(order.dekorasi_status){
        data.dekorasi = paket.Dekorasi
      }
      if(order.catering_status){
        data.Catering = paket.Catering
      }
      if(order.rias_status){
        data.Rias = paket.Rias
      }
      if(order.category_status){
        data.Category = paket.Category
      }
      if(order.dokumentasi_status){
        data.Dokumentasi = paket.Dokumentasi
      }
      if(order.entertainment_status){
        data.Entertainment = paket.Entertainment
      }
    res.status(200).json({
      message: "Order found",
      data: data
    });
    } catch (error) {
      next(error);
    }
  }

static async detail(req, res, next) {
    const { id } = req.params;
    try {
      const result = await Order.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { id: id },
      });
      if (!result) throw { status: 404, message: "Order not found" };
      const paket = await Paket.findOne({
        where: { id: result.paket_id },
        include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment],
      });
      if(!paket) throw { status: 404, message: "Paket not found" };
      res.status(200).json({
        message: "Order found",
        paket
      });
    }
  catch (error) {
    next(error);
    }
  }

  static async editTanggal(req, res, next) {
  try {
    const { id } = req.params;
    const { tanggal_acara } = req.body;
    const result = await Order.update(
      { tanggal_acara: tanggal_acara },
      { where: { id: id } }
    );
    if (!result) throw { status: 404, message: "Order not found" };
    res.status(200).json({
      message: "Order updated",
    });
  } catch (error) {
    next(error);
  }
}

  static async checkoutPage(req, res, next) {
  try {
      const { paket_id, total_harga } = req.params;
      const data = {
        paket_id,
        total_harga,
      };
      const user = req.session.user;
      res.render("konfirmasi", { data, user });
  } catch (error) {
    next(error);
  }
  }

 static async customCheckoutPage(req, res, next) {
  try {
   const { paket_id, total_harga } = req.params;
      const data = {
        paket_id,
        total_harga,
      };
      const user = req.session.user;
      res.render("konfirmasicustom", { data, user });
  } catch (error) {
    next(error);
  }
  }

   static async getAllPaketComponent(req, res, next) {
    try {
      Promise.all([
        Catering.findAll(),
        Dekorasi.findAll(),
        Rias.findAll(),
        Category.findAll(),
        Dokumentasi.findAll(),
        Entertainment.findAll(),
      ]).then(([catering, dekorasi, rias, category, dokumentasi, entertainment]) => {
        let renderData = {};

        renderData.catering = catering.map((item) => {
          return {
            id: item.id,
            name: item.name_catering,
          };
        });

        renderData.dekorasi = dekorasi.map((item) => {
          return {
            id: item.id,
            name: item.name_dekorasi,
          };
        });

        renderData.rias = rias.map((item) => {
          return {
            id: item.id,
            name: item.name_rias,
          };
        });

        renderData.category = category.map((item) => {
          return {
            id: item.id,
            name: item.name_category,
          };
        });

        renderData.dokumentasi = dokumentasi.map((item) => {
          return {
            id: item.id,
            name: item.name_dokumentasi,
          };
        });

        renderData.entertainment = entertainment.map((item) => {
          return {
            id: item.id,
            name: item.name_entertainment,
          };
        });

        res.status(200).json({
          message: "Paket found",
          data: renderData,
      });
    });
    } catch (error) {
      next(error);
    }
  }

  static async getDetailRiwayat(req, res, next) {
    try {
      const { id } = req.params;
      const { fullname, email, address, phoneNumber } = req.user;
      const result = await Order.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { id: id },
      });
      if (!result) throw { status: 404, message: "Order not found" };
      const paket = await Paket.findOne({
        where: { id: result.paket_id },
        include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment],
      });
      if(!paket) throw { status: 404, message: "Paket not found" };
      const data = {
        fullname,
        email,
        address,
        phoneNumber,
        paket,
        result,
      };
      const user = req.session.user;
      res.render("detail-transaksi", { data, user });
    } catch (error) {
      next(error);
    }
  }

   static async getDetailCustom(req, res, next) {
    try {
      const { id } = req.params;
      const { fullname, email, address, phoneNumber } = req.user;
      const result = await Order.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { id: id },
      });
      if (!result) throw { status: 404, message: "Order not found" };
      const paket = await PaketCustom.findOne({
        where: { id: result.paket_custom_id },
        include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment],
      });
      if(!paket) throw { status: 404, message: "Paket not found" };
      const data = {
        fullname,
        email,
        address,
        phoneNumber,
        paket,
        result,
      };
      const user = req.session.user;
      res.render("detail-transaksi", { data, user });
    } catch (error) {
      next(error);
    }
  }

  static async customPaket(req, res, next) {
    try {

    const name_paket = req.body.paket_name;
    const dekorasi_id = req.body.nama_dekorasi
    const category_id = req.body.nama_category
    const catering_id = req.body.nama_catering
    const rias_id = req.body.nama_rias
    const dokumentasi_id = req.body.nama_dokumentasi
    const entertainment_id = req.body.nama_entertainment

    const data = await PaketCustom.create({
      name_paket,
      dekorasi_id,
      catering_id,
      rias_id,
      category_id,
      dokumentasi_id,
      entertainment_id,
    });
    const id = data.id;
    res.redirect("/customdetail/" + id);
    } catch (error) {
      next(error);
    }
  }

  static async kostumisasiPage(req, res, next) {
  try {
    const user = req.session.user;
    res.render("kostumisasi", { user });
  } catch (error) {
    next(error);
  }
  }
}
module.exports = OrderController;
