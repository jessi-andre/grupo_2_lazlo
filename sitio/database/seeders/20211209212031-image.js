'use strict';

var images = [
  {
    file: 'producto1.png',
    productId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20b.jpg',
    productId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20c.jpg',
    productId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto2.png',
    productId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20b.jpg',
    productId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20c.jpg',
    productId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto3a.jpg',
    productId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto3b.jpg',
    productId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto3c.jpg',
    productId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto4a.jpg',
    productId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto4b.jpg',
    productId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto4c.jpg',
    productId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio1a.jpg',
    productId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio1b.jpg',
    productId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio1c.jpg',
    productId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio2a.jpg',
    productId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio2b.jpg',
    productId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio2c.jpg',
    productId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto07a.jpg',
    productId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto07b.jpg',
    productId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto07c.jpg',
    productId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto08a.jpg',
    productId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto08b.jpg',
    productId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto08c.jpg',
    productId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto09a.jpg',
    productId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto09b.jpg',
    productId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto09c.jpg',
    productId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto10a.jpg',
    productId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto10b.jpg',
    productId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto10c.jpg',
    productId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto11a.jpg',
    productId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto11b.jpg',
    productId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto11c.jpg',
    productId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto12a.jpg',
    productId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto12b.jpg',
    productId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto12c.jpg',
    productId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto13a.jpg',
    productId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto13b.jpg',
    productId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto13c.jpg',
    productId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto14a.jpg',
    productId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto14b.jpg',
    productId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto14c.jpg',
    productId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto15a.jpg',
    productId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto15b.jpg',
    productId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto15c.jpg',
    productId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto16a.jpg',
    productId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto16b.jpg',
    productId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto16c.jpg',
    productId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto17a.jpg',
    productId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto17b.jpg',
    productId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto17c.jpg',
    productId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20a.jpg',
    productId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20b.jpg',
    productId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto20c.jpg',
    productId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto21a.jpg',
    productId: 19,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto21b.jpg',
    productId: 19,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto21c.jpg',
    productId: 19,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto22a.jpg',
    productId: 20,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto22b.jpg',
    productId: 20,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto22c.jpg',
    productId: 20,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto23a.jpg',
    productId: 21,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto23b.jpg',
    productId: 21,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto23c.jpg',
    productId: 21,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto24a.jpg',
    productId: 22,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto24b.jpg',
    productId: 22,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto24c.jpg',
    productId: 22,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto25a.jpg',
    productId: 23,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto25b.jpg',
    productId: 23,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto25c.jpg',
    productId: 23,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto26a.jpg',
    productId: 24,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto26b.jpg',
    productId: 24,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto26c.jpg',
    productId: 24,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto27a.jpg',
    productId: 25,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto27b.jpg',
    productId: 25,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto27c.jpg',
    productId: 25,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto28a.jpg',
    productId: 26,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto28b.jpg',
    productId: 26,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto28c.jpg',
    productId: 26,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto29a.jpg',
    productId: 27,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto29b.jpg',
    productId: 27,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto29c.jpg',
    productId: 27,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto30a.jpg',
    productId: 28,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto30b.jpg',
    productId: 28,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto30c.jpg',
    productId: 28,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto31a.jpg',
    productId: 29,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto31b.jpg',
    productId: 29,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto31c.jpg',
    productId: 29,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto32a.jpg',
    productId: 30,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto32b.jpg',
    productId: 30,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto32c.jpg',
    productId: 30,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto33a.jpg',
    productId: 31,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto33b.jpg',
    productId: 31,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto33c.jpg',
    productId: 31,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto34a.jpg',
    productId: 32,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto34b.jpg',
    productId: 32,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto34c.jpg',
    productId: 32,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto35a.jpg',
    productId: 33,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto35b.jpg',
    productId: 33,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto35c.jpg',
    productId: 33,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto36a.jpg',
    productId: 34,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto36b.jpg',
    productId: 34,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto36c.jpg',
    productId: 34,
    createdAt: new Date,
    updatedAt: new Date
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', images, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
