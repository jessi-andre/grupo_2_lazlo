'use strict';

const imagenes = ['producto1.png','producto2.png','producto3.jpg','producto4.jpg','accesorio1.jpg','accesorio2.jpg',"producto07.jpg","producto08.jpg","producto09.jpg","producto10.jpg","producto11.jpg","producto12.jpg","producto13.jpg", "producto14.jpg","producto15.jpg","producto16.jpg","producto17.jpg"];

const images = [];

for (let i = 0; i < imagenes.length; i++) {
    var image = {
      file : imagenes[i],
      productId : i + 1,
      createdAt : new Date,
      updatedAt : new Date
    }
    images.push(image)  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Images',images, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Images', null, {});
  }
};
