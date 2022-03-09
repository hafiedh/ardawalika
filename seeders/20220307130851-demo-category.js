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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedding",
          img_url: "https://ik.imagekit.io/ardawalika/paket-wedding_1GfhCjwzc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668463186",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Family Gathering",
          img_url: "https://ik.imagekit.io/ardawalika/paket-keluarga_52edhXy35sG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646668466264",
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
