'use strict';

const categorias = ['mochilas', 'indumentaria', 'accesorios'];

const categories = categorias.map(categoria => {
  var category = {
    name : categoria,
    createdAt : new Date,
    updatedAt : null,
  }
  return category
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};