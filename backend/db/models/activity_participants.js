"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Activity_Participants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Activity_Participants.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      activity_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      joined_at: DataTypes.TIME,
      left_at: DataTypes.TIME,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "AParticipants",
    }
  );
  return Activity_Participants;
};
