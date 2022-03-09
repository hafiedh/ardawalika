"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dokumentasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokumentasi.hasMany(models.Paket, { foreignKey: "dokumentasi_id" });
      Dokumentasi.hasMany(models.Order, { foreignKey: "dokumentasi_id" });
    }
  }
  Dokumentasi.init(
    {
      name_dokumentasi: DataTypes.STRING,
      harga_dokumentasi: DataTypes.INTEGER,
      keterangan_dokumentasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dokumentasi",
    }
  );
  return Dokumentasi;
};
