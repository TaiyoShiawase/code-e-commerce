'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_stocks', {
      productStock_id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      productDet_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL'),
        allowNull: false
      },
      availableStocks: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_stocks')
  }
};
