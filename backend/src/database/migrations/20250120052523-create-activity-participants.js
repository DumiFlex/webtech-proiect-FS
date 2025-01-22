export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activity_Participants", {
      _id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      activity_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Activities",
          },
          key: "_id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "_id",
        },
      },
      hidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
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

    await queryInterface.addIndex("Activity_Participants", ["activity_id"]);
    await queryInterface.addIndex("Activity_Participants", ["user_id"]);
    await queryInterface.addIndex("Activity_Participants", [
      "activity_id",
      "user_id",
    ]);
    await queryInterface.addIndex("Activity_Participants", ["deleted_at"]);
    await queryInterface.addIndex("Activity_Participants", ["hidden"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activity_Participants");
  },
};
