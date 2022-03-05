"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rias.hasMany(models.Paket, { foreignKey: "rias_id" });
      Rias.hasMany(models.Order, { foreignKey: "rias_id" });
    }
  }
  Rias.init(
    {
      name_rias: DataTypes.STRING,
      harga_rias: DataTypes.STRING,
      keterangan_rias: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rias",
    }
  );
  return Rias;
};
