"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsToMany(models.User, {
        through: models.AParticipants,
        foreignKey: "activity_id",
        as: "participants",
      });

      Activity.hasMany(models.AEvents, {
        foreignKey: "activity_id",
        as: "history",
      });

      Activity.belongsTo(models.User, {
        foreignKey: "created_by",
        as: "creator",
      });
    }
  }
  Activity.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      join_code: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      starts_at: DataTypes.TIME,
      ends_at: DataTypes.TIME,
      started_at: DataTypes.TIME,
      ended_at: DataTypes.TIME,
      status: DataTypes.ENUM("pending", "ongoing", "ended"),
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
