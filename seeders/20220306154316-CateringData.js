'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Caterings",
      [
        {
          name_catering: "Sederhana",
          harga_catering: "2500000",
          keterangan_catering: "Nasi Putih, Sop Kimlo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Standar",
          harga_catering: "3000000",
          keterangan_catering: "Nasi Putih, Sop Kimlo, Sop Ayam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Mewah",
          harga_catering: "4000000",
          keterangan_catering: "Nasi Putih, Sop Kimlo, Sop Ayam ,Asinan",
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
