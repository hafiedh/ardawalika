"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dekorasis",
      [
        {
          name_dekorasi: "Modern",
          harga_dekorasi: "10000000",
          keterangan_dekorasi: " Pelaminan 8 Meter, Pilar Jalan , Entrance, Premium Artical Flower ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dekorasi: "Vintage",
          harga_dekorasi: "5000000",
          keterangan_dekorasi: "Pelaminan 8 Meter, Entrance, Premium Artifical Flower, Meja Tamu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dekorasi: "Basic",
          harga_dekorasi: "1000000",
          keterangan_dekorasi: "Pelaminan 4 Meter, Artifical Flower, Meja Tamu, Buku Tamu",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
