'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaketCustom extends Model {
    
    static associate(models) {
      PaketCustom.belongsTo(models.Dekorasi, { foreignKey: "dekorasi_id" });
      PaketCustom.belongsTo(models.Catering, { foreignKey: "catering_id" });
      PaketCustom.belongsTo(models.Rias, { foreignKey: "rias_id" });
      PaketCustom.belongsTo(models.Category, { foreignKey: "category_id" });
      PaketCustom.belongsTo(models.Dokumentasi, { foreignKey: "dokumentasi_id" });
      PaketCustom.belongsTo(models.Entertainment, {
        foreignKey: "entertainment_id",
      });
      PaketCustom.hasMany(models.Order, { foreignKey: "paket_custom_id" } )
    }
  }
  PaketCustom.init({
    name_paket: DataTypes.STRING,
    dekorasi_id: DataTypes.INTEGER,
    catering_id: DataTypes.INTEGER,
    rias_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    dokumentasi_id: DataTypes.INTEGER,
    entertainment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PaketCustom',
  });
  return PaketCustom;
};