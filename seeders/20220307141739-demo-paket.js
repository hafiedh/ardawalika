'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pakets', [
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
      { 
        id: 2,
        name_paket: "Luxury Gold",
        harga_paket: "Rp. 110.000.000",
        dekorasi_id: 2,
        catering_id: 2,
        rias_id: 2,
        category_id: 2,
        dokumentasi_id: 2,
        entertainment_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        name_paket: "Sprinkle Silver",
        harga_paket: "Rp. 95.000.000",
        dekorasi_id: 3,
        catering_id: 3,
        rias_id: 3,
        category_id: 3,
        dokumentasi_id: 3,
        entertainment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        name_paket: "Nova Bronze",
        harga_paket: "Rp. 80.000.000",
        dekorasi_id: 4,
        catering_id: 4,
        rias_id: 4,
        category_id: 4,
        dokumentasi_id: 4,
        entertainment_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Pakets", null, {});
  }
};
