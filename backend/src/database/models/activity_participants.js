import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Participants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Activity, {
        foreignKey: "activity_id",
        as: "activity",
      });

      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Participants.init(
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      activity_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Activity",
          key: "_id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "_id",
        },
      },
      hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Participants",
      tableName: "Activity_Participants",
      paranoid: true,
      indexes: [
        {
          fields: ["activity_id"],
        },
        {
          fields: ["user_id"],
        },
        {
          fields: ["activity_id", "user_id"],
        },
        {
          fields: ["deleted_at"],
        },
        {
          fields: ["hidden"],
        },
      ],
    }
  );
  return Participants;
};
