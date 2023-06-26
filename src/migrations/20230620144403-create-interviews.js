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
        type: Sequelize.DATEONLY
      },
      confir_interview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      time_interview: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('interviews');
  }
};

//npx sequelize db:migrate:undo --name 20230620144403-create-interviews.js