"use strict";
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activities", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      join_code: {
        type: Sequelize.STRING,
      },
      created_by: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      starts_at: {
        type: Sequelize.DATE,
      },
      ends_at: {
        type: Sequelize.DATE,
      },
      started_at: {
        type: Sequelize.DATE,
      },
      ended_at: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM("pending", "ongoing", "ended"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activities");
  },
};
