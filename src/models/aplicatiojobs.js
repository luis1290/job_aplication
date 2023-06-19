'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AplicatioJobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AplicatioJobs.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    dateShare: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    interviewId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aplicatio_jobs',
  });
  return AplicatioJobs;
};