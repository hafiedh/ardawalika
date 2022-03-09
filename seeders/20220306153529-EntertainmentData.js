'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Entertainments",
      [
        {
          name_entertainment: "Sederhana",
          harga_entertainment: "1000000",
          keterangan_entertainment: "MC 1 Orang, Penyanyi 1 Orang + Organ Tunggal, Sound System Indoor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Standar",
          harga_entertainment: "2000000",
          keterangan_entertainment: "MC 1 Orang, Penyanyi 2 Orang + Organ Tunggal, Sound System Indoor + Outdoor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Lengkap",
          harga_entertainment: "3000000",
          keterangan_entertainment: "MC 1 Orang, Penyanyi 4 Orang + Organ Tunggal, Sound System Indoor + Outdoor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Mewah",
          harga_entertainment: "4000000",
          keterangan_entertainment: "MC 2 Orang, Penyanyi Grup Band, Sound System Indoor + Outdoor",
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
