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
      Order.belongsTo(models.PaketCustom, { foreignKey: "paket_custom_id" })
    }
  }
  Order.init(
    {
      name_order: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      paket_id: DataTypes.INTEGER,
      paket_custom_id: DataTypes.INTEGER,
      tanggal_acara: DataTypes.STRING,
      riwayat_pesanan: DataTypes.DATE,
      total_harga: DataTypes.INTEGER,
      catering_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rias_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      category_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dokumentasi_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      entertainment_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dekorasi_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
