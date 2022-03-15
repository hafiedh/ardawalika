"use strict";
const { encode } = require("../helpers/bcrypt");
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@ardawalika.com",
          password: encode("ardawalika2022"),
          username: "Admin",
          fullname: "admin",
          phoneNumber: "081234567890",
          imgUrl: "",
          address: "Jalan Pegangsaan 1 No.56",
          role: "admin",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
