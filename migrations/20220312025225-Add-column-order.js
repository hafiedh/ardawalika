'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return Promise.all([
      queryInterface.addColumn('Orders', 'dekorasi_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Orders', 'catering_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Orders', 'rias_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Orders', 'category_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Orders', 'dokumentasi_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn('Orders', 'entertainment_status', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
      return Promise.all([
      queryInterface.removeColumn('Orders', 'dekorasi_status'),
      queryInterface.removeColumn('Orders', 'catering_status'),
      queryInterface.removeColumn('Orders', 'rias_status'),
      queryInterface.removeColumn('Orders', 'category_status'),
      queryInterface.removeColumn('Orders', 'dokumentasi_status'),
      queryInterface.removeColumn('Orders', 'entertainment_status'),
    ]);
  }
};
