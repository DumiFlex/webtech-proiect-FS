"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Activity_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity_History.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      activity_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      event_type: DataTypes.ENUM("joined", "left", "feedback"),
      event_data: DataTypes.JSONB,
      created_at: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "AEvents",
    }
  );
  return Activity_History;
};
