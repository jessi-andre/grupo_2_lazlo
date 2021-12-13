'use strict';

var images = [
  {
    file: 'producto1.png',
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
    file: 'producto3.jpg',
    productId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto4.jpg',
    productId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio1.jpg',
    productId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'accesorio2.jpg',
    productId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto07.jpg',
    productId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto08.jpg',
    productId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto09.jpg',
    productId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto10.jpg',
    productId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto11.jpg',
    productId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto12.jpg',
    productId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto13.jpg',
    productId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto14.jpg',
    productId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto15.jpg',
    productId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto16.jpg',
    productId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'producto17.jpg',
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
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', images, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
