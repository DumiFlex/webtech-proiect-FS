"use strict";
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activity_Events", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      activity_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "Activities",
          },
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      event_type: {
        type: Sequelize.ENUM("joined", "left", "feedback"),
      },
      event_data: {
        type: Sequelize.JSONB,
      },
      created_at: {
        type: Sequelize.TIME,
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
    await queryInterface.dropTable("Activity_Events");
  },
};
