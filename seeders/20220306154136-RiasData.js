'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Rias",
      [
        {
          name_rias: "Sederhana",
          harga_rias: 2500000,
          keterangan_rias: "1 Pasang Pengantin Resepsi, 1 Pasang Pengantin Akad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
          {
            name_rias: "Standar",
            harga_rias: 3000000,
            keterangan_rias: "1 Pasang Pengantin Resepsi, 1 Pasang Pengantin Akad , 1 Pasang Orang Tua",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name_rias: "Lengkap",
            harga_rias: 4000000,
            keterangan_rias: "1 Pasang Pengantin Resepsi, 1 Pasang Pengantin Akad , 2 Pasang Orang Tua, 4 Orang Penerima Tamu",
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
