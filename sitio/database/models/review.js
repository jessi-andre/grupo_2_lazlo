'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User,{
        as : 'user',
        foreignKey:'userId'
      })
      Review.belongsTo(models.Product,{
        as : 'product',
        foreignKey:'productId'
      })
    }
  };
  Review.init({
    stars: DataTypes.INTEGER,
    review: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};