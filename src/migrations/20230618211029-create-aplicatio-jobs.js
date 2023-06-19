'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aplicatio_jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      dateShare: {
        type: Sequelize.DATE,
        field: "date_share",
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "uer_id",
        allowNull: false
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "company_id"
      },
      interviewId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "interview_id"
      }
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aplicatio_jobs');
  }
};