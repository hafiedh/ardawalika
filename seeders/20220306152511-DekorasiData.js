'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Dekorasis",
      [
        {
          name_dekorasi: "Modern",
          harga_dekorasi: "10000000",
          keterangan_dekorasi: "Modern",
          id_paket: "1",
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
