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
          img_url: "https://unsplash.com/photos/cW4lLTavU80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wedding",
          img_url: "https://unsplash.com/photos/8vaQKYnawHw",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Family Gathering",
          img_url: "https://unsplash.com/photos/wYOPqmtDD0w",
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
