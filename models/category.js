"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Paket, { foreignKey: "category_id" });
      Category.hasMany(models.Order, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      judul_category: DataTypes.STRING,
      ket_category: DataTypes.STRING,
      ket_layanan: DataTypes.STRING(5000),
      icon_layanan: DataTypes.STRING(5000),
      img_carousel: DataTypes.STRING,
      img_carousels: DataTypes.STRING,
      img_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
