"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Corporate",
          img_url: "https://ik.imagekit.io/ardawalika/paket-corporate_k8i96ZdSo-nv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668476401",
          judul_category: "Ciptakan Kebersamaan Berbagi Pengalaman",
          ket_category:
            "Ardawalika Organizer siap membantu menyelenggarakan berbagai event - event perusahaan sesuai dengan keinginan Perusahaan. Kami mampu merealisasikan keinginan Anda secara professional untuk kepuasan perusahaan Anda.",
          ket_layanan:
            "Perancangan konsep dan tema kegiatan | Persiapan produksi (Panggung, Backdrop, Booth, Branding Kit) | Mengatur dan membuat timeline acara.| Pembuatan rundown acara dari pembukaan hingga penutup | Pembuatan Undangan dan Dekorasi acara | Tim IT support yang membantu teknis pelaksanaan acara. | Technical meeting secara berkala dengan perusahaan. | Mengatur urusan multemidia dan dokumentasi | Mengorganisir jalannya acara perusahaan.",
          icon_layanan:
            "https://ik.imagekit.io/ardawalika/wed_icon-1_9k6ckjRrJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668480865 | https://ik.imagekit.io/ardawalika/kor_icon-4_i1L0kL_Bb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455912 | https://ik.imagekit.io/ardawalika/kor_icon-7_DPeiiR36U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457117 | https://ik.imagekit.io/ardawalika/kor_icon-2_y5FKqC0uP4j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668454891 | https://ik.imagekit.io/ardawalika/kor_icon-5_Jnp0LC2j7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456278 | https://ik.imagekit.io/ardawalika/kor_icon-8_XTmpF6_7s.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457455 | https://ik.imagekit.io/ardawalika/kor_icon-3_j3L3DZmPa.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455363 | https://ik.imagekit.io/ardawalika/kor_icon-6_quBAyNl3y.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456734 | https://ik.imagekit.io/ardawalika/kor_icon-9_-3W75Zx1j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457603",
          img_carousel: "https://ik.imagekit.io/ardawalika/kor_hero1_Ej9_LiHp2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456004",
          img_carousels: "https://ik.imagekit.io/ardawalika/kor_hero2_Px0WHbuF_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455304",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedding",
          img_url: "https://ik.imagekit.io/ardawalika/paket-wedding_1GfhCjwzc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668463186",
          judul_category: "Ciptakan Moment Indah untuk Memulai Lembaran Hidup Baru",
          ket_category: "Membantu kamu dan pasangan untuk mewujudkan pernikahan impianmu menjadi nyata. Karena memori manis disetiap prosesnya menjadi awal yang indah untuk kamu dan pasangan mengarungi bahtera rumah tangga.",
          ket_layanan:
            "Perancangan konsep dan tema pernikahan. | Pendamping keseluruhan vendor - vendor acara. | Mengatur jadwal penjemputan pengantin pria ke wanita. | Pembuatan rundown acara dari pembukaan hingga penutup. | Mengatur teknikal meeting dengan pihak keluarga. | Morning call di pagi hari kepada pengantin. | Technical meeting secara berkala dengan vendor. | Mengorganisir jalannya acara pernikahan. | Menyimpan dan mengirimkan hantaran, kado, dan mahar.",
          icon_layanan:
            "https://ik.imagekit.io/ardawalika/wed_icon-1_9k6ckjRrJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668480865 | https://ik.imagekit.io/ardawalika/kor_icon-4_i1L0kL_Bb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455912 | https://ik.imagekit.io/ardawalika/kor_icon-7_DPeiiR36U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457117 | https://ik.imagekit.io/ardawalika/kor_icon-2_y5FKqC0uP4j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668454891 | https://ik.imagekit.io/ardawalika/kor_icon-5_Jnp0LC2j7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456278 | https://ik.imagekit.io/ardawalika/kor_icon-8_XTmpF6_7s.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457455 | https://ik.imagekit.io/ardawalika/kor_icon-3_j3L3DZmPa.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455363 | https://ik.imagekit.io/ardawalika/kor_icon-6_quBAyNl3y.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456734 | https://ik.imagekit.io/ardawalika/kor_icon-9_-3W75Zx1j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457603",
          img_carousel: "https://ik.imagekit.io/ardawalika/wed_hero1_gJ1LuX-CYPz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668481733",
          img_carousels: "https://ik.imagekit.io/ardawalika/wed_hero2_k-mb9WQ94.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668480008",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Family Gathering",
          img_url: "https://ik.imagekit.io/ardawalika/paket-keluarga_52edhXy35sG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668466264",
          judul_category: "Ciptakan Kehangatan dari Setiap Momen Berharga",
          ket_category: "Ardawalika menjadi pilihan yang tepat untuk mewujudkan setiap kebersamaan dengan keluarga. Menjadikan moment yang terbaik dan tak terlupakan.",
          ket_layanan:
            "Perancangan konsep dan tema kegiatan | Merancang technical meeting dangan pihak keluarga | Produksi (Kupon, Panggung, Branding Kit, Booth, Tenda, Kursi, dll)| Pembuatan rundown kegiatan acara yang akan dilaksanakan | Persiapan dan pembuatan dekorasi acara | Mengatur segala urusan konsumsi dan catering | Mengatur dan membuat timeline acara | Mengatur urusan multemidia dan dokumentasi | Mengorganisir jalannya acara perusahaan.",
          icon_layanan:
            "https://ik.imagekit.io/ardawalika/wed_icon-1_9k6ckjRrJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668480865 | https://ik.imagekit.io/ardawalika/kor_icon-4_i1L0kL_Bb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455912 | https://ik.imagekit.io/ardawalika/kor_icon-7_DPeiiR36U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457117 | https://ik.imagekit.io/ardawalika/kor_icon-2_y5FKqC0uP4j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668454891 | https://ik.imagekit.io/ardawalika/kor_icon-5_Jnp0LC2j7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456278 | https://ik.imagekit.io/ardawalika/kor_icon-8_XTmpF6_7s.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457455 | https://ik.imagekit.io/ardawalika/kor_icon-3_j3L3DZmPa.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668455363 | https://ik.imagekit.io/ardawalika/kor_icon-6_quBAyNl3y.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668456734 | https://ik.imagekit.io/ardawalika/kor_icon-9_-3W75Zx1j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668457603",
          img_carousel: "https://ik.imagekit.io/ardawalika/kel_hero1_HVJUcRnX5PR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668451770",
          img_carousels: "https://ik.imagekit.io/ardawalika/kel_hero2_rajNVHyzR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646668450506",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
