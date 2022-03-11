"use strict";
const { Model } = require("sequelize");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class Catering extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Catering.hasMany(models.Paket, { foreignKey: "catering_id" });
    }
  }
  Catering.init(
    {
      name_catering: DataTypes.STRING,
      harga_catering: DataTypes.INTEGER,
      keterangan_catering: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Catering",
    }
  );
  return Catering;
};
