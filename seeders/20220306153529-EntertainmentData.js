'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Entertainments",
      [
        {
          name_entertainment: "Wedding Sederhana",
          harga_entertainment: 19000000,
          keterangan_entertainment: "1 vocal wanita,1 keyboard,1 saxophone,Sound System 3000 watt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Wedding Standar",
          harga_entertainment: 22500000,
          keterangan_entertainment: "1 vocal wanita dan pria,1 keyboard,1 saxophone,Sound System 3000 watt,1 stage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Wedding Lengkap",
          harga_entertainment: 24000000,
          keterangan_entertainment: "1 vocal wanita dan pria,1 keyboard,1 saxophone/biola,Sound System 3000 watt,1 gitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Wedding Mewah",
          harga_entertainment: 30000000,
          keterangan_entertainment: "1 vocal wanita dan pria,1 keyboard,1 saxophone/biola,Sound System 5000 watt,1 gitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

         {
          name_entertainment: "Ultah Hemat",
          harga_entertainment: 7000000,
          keterangan_entertainment: "1 MC,sound system 200 watt,Tumbler botol,1 Buah masker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_entertainment: "Ultah Spesial",
          harga_entertainment: 1500000,
          keterangan_entertainment: "2 MC,sound system 300 watt,Lampu gantung 10m,Tumbler botol,Mug,1 Buah masker ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_entertainment: "Reuni Keluarga Hemat",
          harga_entertainment: 200000,
          keterangan_entertainment: "Live Musik, 1 MC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Reuni Keluarga Spesial",
          harga_entertainment: 2500000,
          keterangan_entertainment: "Live Musik, 2 MC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_entertainment: "Seminar Hemat",
          harga_entertainment: 300000,
          keterangan_entertainment: "MC 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Seminar Spesial",
          harga_entertainment: 600000,
          keterangan_entertainment: "MC 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_entertainment: "Anniversary Hemat",
          harga_entertainment: 5300000,
          keterangan_entertainment: "Hiburan Musik Band, MC 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_entertainment: "Anniversary Spesial",
          harga_entertainment: 5500000,
          keterangan_entertainment: "Hiburan Musik Band, MC 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Entertainments", null, {});
  }
};
