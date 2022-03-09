"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pakets",
      [
        {
          id: 1,
          name_paket: "Perfect Platinum",
          harga_paket: "Rp. 130.000.000",
          dekorasi_id: 1,
          catering_id: 1,
          rias_id: 1,
          category_id: 1,
          dokumentasi_id: 1,
          entertainment_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Pakets", null, {});
  },
};
