import { Model } from "sequelize";
import { generateUniqueUserId } from "../../utils/index.js";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import { to } from "await-to-js";
export default (sequelize, DataTypes) => {
  class User extends Model {
    async isValidPassword(password) {
      return await bcrypt.compare(password, this.password_hash);
    }

    async generateEmailToken() {
      let activationToken;
      let isUnique = false;

      while (!isUnique) {
        activationToken = randomBytes(32).toString("hex");

        const [error, existingToken] = await to(
          sequelize.models.User.findOne({
            where: { activation_token: activationToken },
          })
        );

        if (!existingToken) {
          isUnique = true;
        }
      }

      this.activation_token = activationToken;
      this.activation_token_expiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

      await this.save();

      return activationToken;
    }

    async generatePasswordResetToken() {
      let passwordResetToken;
      let isUnique = false;

      while (!isUnique) {
        passwordResetToken = randomBytes(32).toString("hex");

        const [error, existingToken] = await to(
          sequelize.models.User.findOne({
            where: { password_reset_token: passwordResetToken },
          })
        );

        if (!existingToken) {
          isUnique = true;
        }
      }

      this.password_reset_token = passwordResetToken;
      this.password_reset_token_expiry = new Date(
        Date.now() + 1 * 60 * 60 * 1000
      );

      await this.save();

      return passwordResetToken;
    }

    async activate() {
      this.status = "active";
      this.activation_token = null;
      this.activation_token_expiry = null;

      await this.save();
    }

    async isActivated() {
      return this.status === "active";
    }

    async resetPassword(newPassword) {
      this.password_hash = newPassword;
      this.password_reset_token = null;
      this.password_reset_token_expiry = null;

      await this.save();
    }

    async ban() {
      this.status = "banned";
      await this.save();
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Activity, {
        foreignKey: "created_by",
        as: "created_activities",
      });

      this.hasMany(models.FeedBack, {
        foreignKey: "user_id",
        as: "provided_feedbacks",
      });

      this.hasMany(models.Participants, {
        foreignKey: "user_id",
        as: "attended_activities",
      });
    }
  }
  User.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      profile_picture: {
        type: DataTypes.STRING,
      },
      account_type: {
        type: DataTypes.ENUM("admin", "student", "professor"),
        allowNull: false,
        defaultValue: "student",
      },
      activation_token: {
        type: DataTypes.STRING,
        unique: true,
      },
      activation_token_expiry: {
        type: DataTypes.DATE,
      },
      password_reset_token: {
        type: DataTypes.STRING,
        unique: true,
      },
      password_reset_token_expiry: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive", "banned"),
        allowNull: false,
        defaultValue: "inactive",
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      indexes: [
        {
          unique: true,
          fields: ["username"],
        },
        {
          unique: true,
          fields: ["email"],
        },
        {
          unique: true,
          fields: ["password_reset_token"],
        },
        {
          fields: ["status"],
        },
        {
          fields: ["account_type"],
        },
        {
          fields: ["gender"],
        },
        {
          fields: ["deletedAt"],
        },
        {
          fields: ["createdAt"],
        },
      ],
    }
  );

  User.beforeCreate(async (user) => {
    user._id = await generateUniqueUserId();
    user.password_hash = await bcrypt.hash(user.password_hash, 10);
  });

  User.beforeUpdate(async (user) => {
    if (user.changed("password_hash")) {
      user.password_hash = await bcrypt.hash(user.password_hash, 10);
    }
  });

  return User;
};
