const { Order, Paket, Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment, PaketCustom} = require("../models");
const midtransClient = require("midtrans-client");
const { Op } = require("sequelize");

let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "SB-Mid-server-4pJKsKUlFxNBCuYEjg4yJ85w",
  clientKey: "SB-Mid-client-IzpeIseynV_1r_km",
});

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const { id, email, fullname, phoneNumber, address } = req.user;
      const { paket_id } = req.params;
      const { tanggal_acara, total_harga, nama_bank } = req.body;

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
        midtrans_response: "",
      });

      if (!result) throw { status: 400, message: "Register failed" };

      const data = {
        payment_type: "bank_transfer",
        bank_transfer: {
          bank: nama_bank,
        },
        transaction_details: {
          order_id: result.id,
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
        },
      };
      const charge = await coreApi.charge(data);
      if (charge.status_code === "200" || charge.status_code === "201") {
        await Order.update(
          { midtrans_response: JSON.stringify(charge) },
          { where: { id: result.id } }
        );
        res.status(200).json({
          message: "Order created",
          data: {
            id: result.id,
            name_order: result.name_order,
            tanggal_acara: result.tanggal_acara,
            riwayat_pesanan: result.riwayat_pesanan,
            total_harga: result.total_harga,
            midtrans_response: charge,
          },
        });
      } else {
        throw { status: 400, message: "Charge failed" };
      }
    } catch (err) {
      next(err);
    }
  }

  static async crateOrderCustom(req,res,next) {
      const { id, email, fullname, phoneNumber, address } = req.user;
      const { paket_id } = req.params;
      const { tanggal_acara, nama_bank } = req.body;

      const paket = await PaketCustom.findOne({
        where: { id: paket_id },
         include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment]
      });

      console.log(paket)
      
      // if (!paket) throw { status: 404, message: "Paket not found" };

      // const result = await Order.create({
      //   name_order: paket.name_paket,
      //   user_id: id,
      //   paket_custom_id: paket_id,
      //   tanggal_acara: tanggal_acara,
      //   riwayat_pesanan: new Date(),
      //   total_harga: total_harga,
      //   midtrans_response: "",
      // });

      // if (!result) throw { status: 400, message: "Register failed" };

      // const data = {
      //   payment_type: "bank_transfer",
      //   bank_transfer: {
      //     bank: nama_bank,
      //   },
      //   transaction_details: {
      //     order_id: result.id,
      //     gross_amount: total_harga,
      //   },
      //   item_details: {
      //     id: paket_id,
      //     price: total_harga,
      //     quantity: 1,
      //     name: paket.name_paket,
      //   },
      //   customer_details: {
      //     fullname: fullname,
      //     email: email,
      //     phone: phoneNumber,
      //     address: address,
      //   },
      // };
      // const charge = await coreApi.charge(data);
      // if (charge.status_code === "200" || charge.status_code === "201") {
      //   await Order.update(
      //     { midtrans_response: JSON.stringify(charge) },
      //     { where: { id: result.id } }
      //   );
      //   res.status(200).json({
      //     message: "Order created",
      //     data: {
      //       id: result.id,
      //       name_order: result.name_order,
      //       tanggal_acara: result.tanggal_acara,
      //       riwayat_pesanan: result.riwayat_pesanan,
      //       total_harga: result.total_harga,
      //       midtrans_response: charge,
      //     },
      //   });
      // } else {
      //   throw { status: 400, message: "Charge failed" };
      // }
    } catch (err) {
      next(err);
  }

  static async handleNotification(req, res, next) {
    try {

    } catch (error) {}
  }

  static async history(req, res, next) {
    try {
      const { id } = req.user;
      console.log(req.user);
      const result = await Order.findAll({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { user_id: id },
      });
      if (!result) throw { status: 404, message: "Order not found" };
      const paketId = result.map((item) => item.paket_id);
      const paket = await Paket.findAll({
        attributes: ["img_url"],
        where: {
          id: {
            [Op.in]: paketId,
          },
        },
      });
      const paketUrl = paket.map((item) => item.img_url);
      const data = result.map((item) => {
        return {
          id: item.id,
          user_id: item.user_id,
          paket_id: item.paket_id,
          img_url: paketUrl[paketId.indexOf(item.paket_id)],
          name_order: item.name_order,
          tanggal_acara: item.tanggal_acara,
          riwayat_pesanan: item.riwayat_pesanan.toString().substring(0, 10),
          total_harga: item.total_harga.toString(),
          midtrans_response: JSON.parse(item.midtrans_response),
        };
      });
      console.log(data);
      res.render("riwayat-pemesanan", { orders: data });
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
      const paket = await Paket.findOne({
        attributes: { exclude: ["createdAt", "updateAt"] },
        where: { id: order.paket_id },
        include:[Dekorasi, Catering, Rias, Category, Dokumentasi, Entertainment],
      })
      let data = {}
      if(order.dekorasi_status){}

      if(order.catering_status){}
      
      if(order.rias_status){}

      if(order.category_status){}

      if(order.dokumentasi_status){}

      if(order.entertainment_status){}


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
}
module.exports = OrderController;
