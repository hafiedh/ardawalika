'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dokumentasis",
      [
        {
          name_dokumentasi: "Sederhana",
          harga_dokumentasi: 1000000,
          keterangan_dokumentasi: "Cetak 50 Foto Album + Kaset, Sinematografi 1 Menit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Standar",
          harga_dokumentasi: 2000000,
          keterangan_dokumentasi: "Cetak 100 Foto Album + Kaset, Sinematografi 2 Menit, Video Shooting 2 Jam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Lengkap",
          harga_dokumentasi: 3000000,
          keterangan_dokumentasi: "Cetak 150 Foto Album + Kaset, Sinematografi 4 Menit, Video Shooting full durasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Mewah",
          harga_dokumentasi: 5000000,
          keterangan_dokumentasi: "Cetak 200 Foto Album + Kaset, Sinematografi 6 Menit, Video Shooting full durasi",
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
