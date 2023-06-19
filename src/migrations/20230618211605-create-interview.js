'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interview', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateInterview: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "date_interview"
      },
      confirInterview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "confir_interview"
      },
      timeInterview: {
        type: Sequelize.TIME,
        field: "time_interview"
      }
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('interview');
  }
};