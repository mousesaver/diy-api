'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.image.belongsTo(models.movie)
    }
  }
  image.init({
    url: DataTypes.TEXT,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};