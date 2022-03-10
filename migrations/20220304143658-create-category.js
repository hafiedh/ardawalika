"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      judul_category: {
        type: Sequelize.STRING,
      },
      ket_category: {
        type: Sequelize.STRING,
      },
      ket_layanan: {
        type: Sequelize.STRING(5000),
      },
      icon_layanan: {
        type: Sequelize.STRING(5000),
      },
      img_carousel: {
        type: Sequelize.STRING,
      },
      img_carousels: {
        type: Sequelize.STRING,
      },
      img_url: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Categories");
  },
};
