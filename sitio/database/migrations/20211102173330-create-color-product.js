'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ColorProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'Colors'
          },
          key:'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'Products'
          },
          key:'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ColorProducts');
  }
};