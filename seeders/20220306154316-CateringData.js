'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Caterings",
      [
        {
          name_catering: "Wedding Sederhana",
          harga_catering: 20000000,
          keterangan_catering: "5 Buffet ,2 Stall,2 Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Wedding Standar",
          harga_catering: 25000000,
          keterangan_catering: "5 Buffet,3 Foodstall,2 Dessert,50 Pax Cofee break",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Wedding Lengkap",
          harga_catering: 30000000,
          keterangan_catering: "7 Buffet,3 Foodstall,2 Dessert,50 Pax Cofee break",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Wedding Mewah",
          harga_catering: 33000000,
          keterangan_catering: "1000 Pax,7 Buffet,3 Foodstall,3 Dessert,100 Pax Cofee break,Dekorasi area katering,Meja Katering Pengantin & VIP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Ulang Tahun Hemat",
          harga_catering: 2000000,
          keterangan_catering: "3 Buffet,2 Foodstall,2 Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Ulang Tahun Standar",
          harga_catering: 4000000,
          keterangan_catering: "5 Buffet,2 Foodstall,2 Dessert,Kue Diameter 20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Ulang Tahun Special",
          harga_catering: 5500000,
          keterangan_catering: "5 Buffet,3 Foodstall,2 Dessert,Kue 2 tingkat Diameter 18 dan 16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Ulang Tahun Special",
          harga_catering: 5500000,
          keterangan_catering: "5 Buffet,3 Foodstall,2 Dessert,Kue 2 tingkat Diameter 18 dan 16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Reuni Keluar Hemat",
          harga_catering: 2000000,
          keterangan_catering: "3 Buffet,2 Foodstall,2 Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Reuni Keluarga Standar",
          harga_catering: 3000000,
          keterangan_catering: "5 Buffet,2 Foodstall,3 Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name_catering: "Reuni Keluarga Spesial",
          harga_catering: 5000000,
          keterangan_catering: "5 Buffet,3 Foodstall,5 Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Seminar Online",
          harga_catering: 0,
          keterangan_catering: "Tanpa Konsumsi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Seminar Standar",
          harga_catering: 1500000,
          keterangan_catering: "Snack 1x,Lunch Box 1x,100 pax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_catering: "Seminar Spesial",
          harga_catering: 4000000,
          keterangan_catering: "5 Buffet,3 Foodstall,3 Dessert,300 pax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Anniversary Standar",
          harga_catering: 2500000,
          keterangan_catering: "Kue/Tumpeng,5 Buffet,3 Foodstall,3 Dessert,100 pax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_catering: "Anniversary Spesial",
          harga_catering: 4000000,
          keterangan_catering: "Kue/Tumpeng,5 Buffet,3 Foodstall,3 Dessert,300 pax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Caterings",null,{});
  }
};
