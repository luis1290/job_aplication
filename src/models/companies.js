'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      companies.hasMany(models.aplicatio_jobs,{foreignKey: 'company_id'})
    }
  }
  companies.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};