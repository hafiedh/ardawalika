"use strict";
const { encode } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: { msg: "Wrong Format Email" },
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email cant be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 25],
            msg: "Min password length is 8",
          },
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password cant be empty",
          },
        },
      },
      username: DataTypes.STRING,
      fullname: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      address: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["user", "admin"],
        defaultValue: "user",
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "inactive",
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          const { password } = user;
          const hashPassword = await encode(password);
          user.password = hashPassword;
        },
        beforeBulkUpdate: async (user) => {
          if (
            user.attributes.password &&
            user.attributes.password.length < 25 && 
            user.attributes.password.length > 8
          ) {
            const hashPassword = await encode(user.attributes.password);
            user.attributes.password = hashPassword;
          }
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
