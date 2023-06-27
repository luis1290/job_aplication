'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      interviews.belongsTo(models.aplicatio_jobs, { foreignKey: 'aplication_job_id' });
    }
  }
  interviews.init({
    date_interview: DataTypes.DATE,
    confir_interview: DataTypes.BOOLEAN,
    time_interview: DataTypes.TIME,
    aplication_job_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'interviews',
  });
  return interviews;
};