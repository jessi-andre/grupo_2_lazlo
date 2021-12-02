'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Community.belongsTo(models.User,{
        as : 'community',
        foreignKey:'userId'
      })
    }
  };
  Community.init({
    userId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Community',
  });
  return Community;
};