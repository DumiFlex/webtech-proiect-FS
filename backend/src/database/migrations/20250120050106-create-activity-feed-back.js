export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activity_FeedBacks", {
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
      feedback: {
        type: Sequelize.ENUM("smiley", "frowny", "surprised", "confused"),
        allowNull: false,
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

    await queryInterface.addIndex("Activity_FeedBacks", ["activity_id"]);
    await queryInterface.addIndex("Activity_FeedBacks", ["user_id"]);
    await queryInterface.addIndex("Activity_FeedBacks", [
      "activity_id",
      "user_id",
    ]);
    await queryInterface.addIndex("Activity_FeedBacks", ["feedback"]);
    await queryInterface.addIndex("Activity_FeedBacks", ["createdAt"]);
    await queryInterface.addIndex("Activity_FeedBacks", ["deleted_at"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activity_FeedBacks");
  },
};
