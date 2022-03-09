"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pakets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_paket: {
        type: Sequelize.STRING,
      },
      harga_paket: {
        type: Sequelize.INTEGER,
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
      rias_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Rias",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
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
      entertainment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Entertainments",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
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
    await queryInterface.dropTable("Pakets");
  },
};
