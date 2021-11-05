'use strict';

const rols = ['usuario','admin'];

const roles = rols.map(rol => {
  var role = {
    name : rol,
    createdAt : new Date,
    updatedAt : null,
  }
  return role
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};