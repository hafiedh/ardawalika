'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ket_pelaksanaan: {
        type: Sequelize.STRING
      },
      ket_waktu: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      imgurl: {
        type: Sequelize.STRING
      },
      UserProductId: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trackings');
  }
};