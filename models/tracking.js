'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tracking.init({
    ket_pelaksanaan: DataTypes.STRING,
    ket_waktu: DataTypes.DATE,
    status: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    UserProductId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'tracking',
  });
  return tracking;
};