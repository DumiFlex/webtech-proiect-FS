import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class FeedBack extends Model {
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
  FeedBack.init(
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
      feedback: {
        type: DataTypes.ENUM("smiley", "frowny", "surprised", "confused"),
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "FeedBack",
      tableName: "Activity_FeedBacks",
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
          fields: ["feedback"],
        },
        {
          fields: ["createdAt"],
        },
        {
          fields: ["deleted_at"],
        },
      ],
    }
  );
  return FeedBack;
};
