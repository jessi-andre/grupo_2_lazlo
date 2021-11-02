'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SizeProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'Sizes'
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
    await queryInterface.dropTable('SizeProducts');
  }
};