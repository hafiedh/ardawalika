'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dokumentasis",
      [
        {
          name_dokumentasi: "Wedding Sederhana",
          harga_dokumentasi: 8000000,
          keterangan_dokumentasi: "Liputan Akad & Resepsi,1 wedding album,1 foto frame 16R,Video Pernikahan 15 Menit,Edit foto & highlight video sosial media,USB photo semua file",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Wedding Standar",
          harga_dokumentasi: 9500000,
          keterangan_dokumentasi: "Liputan Akad & Resepsi,1 Wedding album magazine,1 group album magazine,1 custom box eksklusif,Video liputan durasi 15-20 menit,Photo edit & VIdeo highlight sosmed,USB photo all file",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Wedding Lengkap",
          harga_dokumentasi: 11000000,
          keterangan_dokumentasi: "Liputan Akad & Resepsi,1 Wedding album magazine,1 group album magazine,1 custom box eksklusif,1 pembesaran 16R +frame,Video liputan durasi 15-20 menit,Photo edit & VIdeo highlight sosmed,USB photo all file",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_dokumentasi: "Wedding Mewah",
          harga_dokumentasi: 13000000,
          keterangan_dokumentasi: "Liputan akad & resepsi,1 Wedding album magazine,1 Group album magazine,1 Custom box esklusif,1x cetak foto 16R + Frame,Video liputan durasi 15-20 menit,Photo & video edit,USB photo & all files",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Ultah Hemat",
          harga_dokumentasi: 500000,
          keterangan_dokumentasi: "Dokumentasi full acara,Full Video durasi 1 - 2 jam,20 edit foto,Soft file dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Ultah Spesial",
          harga_dokumentasi: 1000000,
          keterangan_dokumentasi: "Dokumentasi full acara,Full Video durasi 1 - 2 jam,1 menit video cinematic,50 edit foto,2 Album 20x30 (20 Halaman),Soft file dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Reuni Keluar Hemat",
          harga_dokumentasi: 800000,
          keterangan_dokumentasi: "Dokumentasi full acara,Full Video durasi 1 - 2 jam,20 edit foto,Soft file semua dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Reuni Keluar Spesial",
          harga_dokumentasi: 1500000,
          keterangan_dokumentasi: "Dokumentasi full acara,Full Video durasi 1 - 2 jam,1 menit video cinematic,50 edit foto,2 Album 20x30 (20 Halaman),Soft semua file dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
           {
          name_dokumentasi: "Seminar Online",
          harga_dokumentasi: 0,
          keterangan_dokumentasi: "Recording zoom,Streaming youtube,daftar hadir peserta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Seminar Standar",
          harga_dokumentasi: 500000,
          keterangan_dokumentasi: "Dokumentasi full acara,Full Video durasi 1 - 2 jam,20 edit foto,Soft file semua dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Seminar Lengkap",
          harga_dokumentasi: 1000000,
          keterangan_dokumentasi: "Foto kegiatan,video kegiatan,Soft copy dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
           {
          name_dokumentasi: "Anniversary Hemat",
          harga_dokumentasi: 1000000,
          keterangan_dokumentasi: "Foto kegiatan,Soft copy dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name_dokumentasi: "Anniversary Spesial",
          harga_dokumentasi: 2000000,
          keterangan_dokumentasi: "Foto & video kegiatan,Soft copy dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },    
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dokumentasis", null, {});
  }
};
