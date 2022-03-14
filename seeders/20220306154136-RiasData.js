'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Rias",
      [
        {
          name_rias: "Wedding Sederhana",
          harga_rias: 12000000,
          keterangan_rias:  "Make up pengantin akad+resepsi,2 Pasang Orang Tua Pengantin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
          {
            name_rias: "Wedding Standar",
            harga_rias: 14000000,
            keterangan_rias: "Make up pengantin akad+resepsi,Handbouquet,Make up 2 pasang orangtua,Make up untuk 2 pager ayu+kebaya",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name_rias: "Wedding Lengkap",
            harga_rias: 20000000,
            keterangan_rias: "Make up penngantin akad+resepsi,Busanna pengantin akad+resepsi (ready stock),Handbouquet,Make up untuk 2 ibu+kebaya (ready stock),Beskap unntuk bapak (ready stock),Make up untuk 2 pager ayu+kebaya(ready stock),Beskap untuk 2 pager bagus (ready stock)",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name_rias: "Wedding Mewah",
            harga_rias: 23000000,
            keterangan_rias: "Make up pengantin akad & resepsi,Busana pengantin akad & resepsi,Handboquet,Make up 2 & busana pasang orang tua,Make up & kebaya untuk 1 pasang pager ayu,Make up & kebaya untuk 1 pasang pager bagus",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
           {
            name_rias: "Ultah Hemat",
            harga_rias: 200000,
            keterangan_rias: "Kartu undangan 100 buah",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
         { 
            name_rias: "Ultah Spesial",
            harga_rias: 300000,
            keterangan_rias: "Kartu undangan 100 buah,undangan digital(video+foto)",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { 
            name_rias: "Reuni Keluarga Hemat",
            harga_rias: 300000,
            keterangan_rias: "sound system 500watt",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { 
            name_rias: "Reuni Keluarga Spesial",
            harga_rias: 500000,
            keterangan_rias: "sound system 500watt,Lampu gantung 10m",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { 
            name_rias: "Reuni Keluarga Hemat",
            harga_rias: 300000,
            keterangan_rias: "sound system 500watt",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { 
            name_rias: "Reuni Keluarga Spesial",
            harga_rias: 500000,
            keterangan_rias: "sound system 500watt,Lampu gantung 10m",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
           { 
            name_rias: "Seminar Online",
            harga_rias:500000,
            keterangan_rias: "Rias Ruang Seminar",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          { 
            name_rias: "Seminar Offline",
            harga_rias: 1500000,
            keterangan_rias: "Sound system,Proyektor",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
           { 
            name_rias: "Anniversary",
            harga_rias: 2000000,
            keterangan_rias: "Sound system,Proyektor",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Rias", null, {});
  }
};
