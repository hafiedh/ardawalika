"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dekorasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dekorasi.hasMany(models.Paket, { foreignKey: "dekorasi_id" });
    }
  }
  Dekorasi.init(
    {
      name_dekorasi: DataTypes.STRING,
      harga_dekorasi: DataTypes.INTEGER,
      keterangan_dekorasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dekorasi",
    }
  );
  return Dekorasi;
};
