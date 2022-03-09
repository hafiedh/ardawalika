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
