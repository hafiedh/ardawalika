"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.belongsTo(models.Paket, { foreignKey: "paket_id" });
    }
  }
  Order.init(
    {
      name_order: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      paket_id: DataTypes.INTEGER,
      tanggal_acara: DataTypes.STRING,
      riwayat_pesanan: DataTypes.DATE,
      total_harga: DataTypes.INTEGER,
      midtrans_response: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
