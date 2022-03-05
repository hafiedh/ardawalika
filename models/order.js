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
      Order.belongsTo(models.Dekorasi, { foreignKey: "dekorasi_id" });
      Order.belongsTo(models.Dokumentasi, { foreignKey: "dokumentasi_id" });
      Order.belongsTo(models.Rias, { foreignKey: "rias_id" });
      Order.belongsTo(models.Category, { foreignKey: "category_id" });
      Order.belongsTo(models.Entertainment, { foreignKey: "entertainment_id" });
      Order.belongsTo(models.Catering, { foreignKey: "catering_id" });
      Order.hasMany(models.OrderDetail, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      name_order: DataTypes.STRING,
      paket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      dekorasi_id: DataTypes.INTEGER,
      dokumentasi_id: DataTypes.INTEGER,
      rias_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      entertainment_id: DataTypes.INTEGER,
      catering_id: DataTypes.INTEGER,
      jadwal: DataTypes.STRING,
      history: DataTypes.STRING,
      total_harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
