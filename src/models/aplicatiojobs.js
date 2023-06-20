'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aplicatio_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      aplicatio_jobs.belongsTo(models.users, { foreignKey: 'uer_id' })
      aplicatio_jobs.belongsTo(models.companies, { foreignKey: 'company_id' })
    

      aplicatio_jobs.belongsTo(models.interviews, {foreignKey:"interview_id"});
      
    }
  }
  aplicatio_jobs.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_share: DataTypes.DATE,
    uer_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    interview_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aplicatio_jobs',
  });
  return aplicatio_jobs;
};