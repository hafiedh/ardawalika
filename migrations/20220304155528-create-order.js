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
        references: {
          model: "Users",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      categori_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      dekorasi_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dekorasis",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      catering_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Caterings",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      entertainment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Entertainments",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      rias_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Rias",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      dokumentasi_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dokumentasis",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      paket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pakets",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      jadwal: {
        type: Sequelize.STRING,
      },
      history: {
        type: Sequelize.STRING,
      },
      total_harga: {
        type: Sequelize.INTEGER,
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
