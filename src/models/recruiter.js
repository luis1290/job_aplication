'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recruiter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recruiter.init({
    name: DataTypes.STRING,
    linkelin: DataTypes.TEXT,
    email: DataTypes.STRING,
    compani_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recruiter',
  });
  return recruiter;
};