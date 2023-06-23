'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_interview: {
        type: Sequelize.DATE
      },
      confir_interview: {
        type: Sequelize.BOOLEAN
      },
      time_interview: {
        type: Sequelize.TIME
      }
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('interviews');
  }
};