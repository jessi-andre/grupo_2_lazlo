'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      })
      Product.belongsToMany(models.Color,{
        as : 'colors',
        through : 'ColorProducts',
        foreignKey : 'productId',
        otherKey : 'colorId'
      })
      Product.belongsToMany(models.Size,{
        as : 'size',
        through : 'SizeProducts',
        foreignKey : 'productId',
        otherKey : 'sizeId'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};