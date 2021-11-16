'use strict';

const colores = ["verde", "rojo", "negro", "blanco", "azul", "beige", "violeta", "marrón"];

const colors = colores.map(color => {
  var colore = {
    name: color,
    createdAt: new Date,
    updatedAt: null,
  }
  return colore
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Colors', colors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};