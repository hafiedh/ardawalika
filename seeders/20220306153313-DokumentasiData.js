'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dokumentasis",
      [
        {
          name_dokumentasi: "Paket 1",
          harga_dokumentasi: "1000000",
          keterangan_dokumentasi: "VIDEO, FOTO",
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
