"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_order: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          onUpdade: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      paket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pakets",
          key: "id",
          onUpdade: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      paket_custom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "PaketCustoms",
          key: "id",
          onUpdade: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      tanggal_acara: {
        type: Sequelize.STRING,
      },
      riwayat_pesanan: {
        type: Sequelize.DATE,
      },
      total_harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      midtrans_response: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Orders");
  },
};
