"use strict";
const { encode } = require("../helpers/bcrypt");
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@binar.com",
          password: await encode("admin"),
          username: "admin",
          fullname: "admin",
          phoneNumber: "081234567890",
          imgUrl: "",
          address: "Perumahan Cibaduyut",
          role: "admin",
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "user@binar.com",
          password: await encode("user"),
          username: "user",
          fullname: "user",
          phoneNumber: "082216540172",
          imgUrl: "",
          address: "Perumahan ciputat",
          role: "user",
          status: "inactive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
