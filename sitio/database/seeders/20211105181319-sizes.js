'use strict';

const talles = ['s', 'm', 'l', 'xl', 'xxl'];

const sizes = talles.map(talle => {
  var size = {
    name: talle,
    createdAt: new Date,
    updatedAt: null,
  }
  return size
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sizes', sizes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sizes', null, {});
  }
};