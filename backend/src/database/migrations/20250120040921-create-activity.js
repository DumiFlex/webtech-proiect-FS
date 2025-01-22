export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activities", {
      _id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      created_by: {
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
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      access_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("upcoming", "ongoing", "completed"),
      },
      deletedAt: {
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

    await queryInterface.addIndex("Activities", ["created_by"]);

    await queryInterface.addIndex("Activities", {
      unique: true,
      fields: ["_id", "access_code"],
    });

    await queryInterface.addIndex("Activities", ["title"]);
    await queryInterface.addIndex("Activities", ["start_date"]);
    await queryInterface.addIndex("Activities", ["end_date"]);
    await queryInterface.addIndex("Activities", ["start_date", "end_date"]);
    await queryInterface.addIndex("Activities", ["hidden"]);
    await queryInterface.addIndex("Activities", ["status"]);
    await queryInterface.addIndex("Activities", ["deletedAt"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activities");
  },
};
