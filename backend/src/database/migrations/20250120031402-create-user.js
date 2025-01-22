export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      _id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        allowNull: false,
      },
      profile_picture: {
        type: Sequelize.STRING,
      },
      account_type: {
        type: Sequelize.ENUM("admin", "student", "professor"),
        allowNull: false,
      },
      activation_token: {
        type: Sequelize.STRING,
        unique: true,
      },
      activation_token_expiry: {
        type: Sequelize.DATE,
      },
      password_reset_token: {
        type: Sequelize.STRING,
        unique: true,
      },
      password_reset_token_expiry: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "banned"),
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
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

    await queryInterface.addIndex("Users", ["email"]);
    await queryInterface.addIndex("Users", ["username"]);
    await queryInterface.addIndex("Users", ["account_type"]);
    await queryInterface.addIndex("Users", ["status"]);
    await queryInterface.addIndex("Users", ["gender"]);

    await queryInterface.addIndex("Users", ["deletedAt"]);
    await queryInterface.addIndex("Users", ["createdAt"]);

    await queryInterface.addIndex("Users", ["password_reset_token"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
