"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Activity, {
        through: models.AParticipants,
        foreignKey: "user_id",
        as: "activities",
      });

      User.hasMany(models.AEvents, {
        foreignKey: "user_id",
        as: "activityHistory",
      });

      User.hasMany(models.Activity, {
        foreignKey: "created_by",
        as: "createdActivities",
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userType: DataTypes.ENUM("admin", "student", "teacher"),
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      profilePicture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
