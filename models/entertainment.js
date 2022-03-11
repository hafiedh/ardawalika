"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entertainment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entertainment.belongsTo(models.Paket, { foreignKey: "paket_id" });
    }
  }
  Entertainment.init(
    {
      name_entertainment: DataTypes.STRING,
      harga_entertainment: DataTypes.INTEGER,
      keterangan_entertainment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Entertainment",
    }
  );
  return Entertainment;
};
