"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dekorasis",
      [
        {
          name_dekorasi: "Dekorasi Bronze",
          harga_dekorasi: 14000000,
          keterangan_dekorasi: "Dekorasi Pelaminan 6 Meter,Area Gate Masuk,4 Pilar Jalan,Gate Masuk,1 Set Meja Akad,2 meja penerima tamu & kotak angpau,Welcome Sign",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
          {
          name_dekorasi: "Dekorasi Silver",
          harga_dekorasi: 17000000,
          keterangan_dekorasi: "Dekorasi pelaminan maks 10 meter,Taman Pelaminan (Fresh Flower & Artificial),1 Set meja + kursi akad,1 Backdrop music,1 Spot galeri photo,4 Pilar jalan & karpet jalan,3 Gate lengkung/kotak,2 Meja penerima tamu & kotak angpau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
          {
          name_dekorasi: "Dekorasi Gold",
          harga_dekorasi: 19000000,
          keterangan_dekorasi: "Dekorasi pelaminan maks 10 meter (ready stock),Taman Pelaminan (Fresh Flower & Artificial),1 Set meja + kursi akad,1 Backdrop music,1 Spot galeri photo,1 Spot photobooth,6 Pilar jalan & karpet jalan,3 Gate lengkung/kotak,1 Pergola masuk 3x4 meter,2 Meja penerima tamu & kotak angpau, Welcome Sign",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
  
        {
          name_dekorasi: "Dekorasi Platinum",
          harga_dekorasi: 22000000,
          keterangan_dekorasi: "Dekorasi pelaminan maks 10 meter,Teman pelaminan (fresh flower & artificial),1 Set meja & kursi akad,1 Backdrop Music,1 Spot galeri photo,1 Spot photobooth,6 Pilar jalan & karpet jalan,3 Gate lengkung /  kotak,1 Pergola masuk 3x4 meter,2 Meja penerima tamu & kotak angpauWelcome sign",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      
        {
          name_dekorasi: "Ultah Hemat",
          harga_dekorasi: 600000,
          keterangan_dekorasi: "Panggung basic,Welcome sign,Photobooth,2 spot foto,Meja dan kursi ulangtahun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Ultah standar",
          harga_dekorasi: 1000000,
          keterangan_dekorasi: "Panggung full 100 balon,Welcome sign,Photobooth,2 Spot foto,Meja dan kursi ulangtahun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Ultah Spesial",
          harga_dekorasi: 2000000,
          keterangan_dekorasi: "Panggung full 500 balon,Welcome sign,Photobooth,2 Spot foto,Meja dan kursi ulangtahun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Seminar Online",
          harga_dekorasi: 200000,
          keterangan_dekorasi: "Background zoom,Flyer acara(online)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Seminar Standar",
          harga_dekorasi: 500000,
          keterangan_dekorasi: "Banner,PhotoBooth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Seminar Spesial",
          harga_dekorasi: 1500000,
          keterangan_dekorasi: "dekorasi meja & kursi,Dekorasi panggung indoor,Banner,Photobooth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dekorasi: "Reuni Keluarga Standar",
          harga_dekorasi: 500000,
          keterangan_dekorasi: "Panggung,Meja dan kursi tamu,1 Spot foto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Reuni Keluarga Spesial",
          harga_dekorasi: 1000000,
          keterangan_dekorasi: "Panggung,1 Photobooth,3 Spot foto,Meja dan kursi tamu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Anniversary Hemat",
          harga_dekorasi: 500000,
          keterangan_dekorasi: "Dekorasi meja & kursi,Banner acara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Anniversary Standar",
          harga_dekorasi: 1500000,
          keterangan_dekorasi: "Dekorasi meja & kursi,Banner acara Dekorasi panggung indoor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dekorasi: "Anniversary Spesial",
          harga_dekorasi: 2000000,
          keterangan_dekorasi: "Dekorasi meja & kursi,Banner acara,Dekorasi panggung indoor/outdoor,Dekorasi Photobooth",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dekorasis", null, {});
  },
};
