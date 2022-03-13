"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paket.belongsTo(models.Dekorasi, { foreignKey: "dekorasi_id" });
      Paket.belongsTo(models.Catering, { foreignKey: "catering_id" });
      Paket.belongsTo(models.Rias, { foreignKey: "rias_id" });
      Paket.belongsTo(models.Category, { foreignKey: "category_id" });
      Paket.belongsTo(models.Dokumentasi, { foreignKey: "dokumentasi_id" });
      Paket.belongsTo(models.Entertainment, {
        foreignKey: "entertainment_id",
      });
      Paket.hasMany(models.Order, { foreignKey: "paket_id" });
    }
  }
  Paket.init(
    {
      name_paket: DataTypes.STRING,
      harga_paket: DataTypes.STRING,
      img_url: DataTypes.STRING,
      ket_paket: DataTypes.STRING,
      des_paket: DataTypes.STRING(2000),
      dekorasi_id: DataTypes.INTEGER,
      catering_id: DataTypes.INTEGER,
      rias_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      dokumentasi_id: DataTypes.INTEGER,
      entertainment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Paket",
    }
  );
  return Paket;
};
