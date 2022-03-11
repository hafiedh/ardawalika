const { Order, Paket } = require("../models");
const midtransClient = require("midtrans-client");

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
      const { tanggal_acara, total_harga } = req.body;

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
          bank: "bni",
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

  static async handleNotification(req, res, next) {}
}

module.exports = OrderController;
