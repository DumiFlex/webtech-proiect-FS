import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "created_by",
        as: "creator",
      });

      this.hasMany(models.FeedBack, {
        foreignKey: "activity_id",
        as: "feedbacks",
      });

      this.hasMany(models.Participants, {
        foreignKey: "activity_id",
        as: "participants",
      });
    }
  }
  Activity.init(
    {
      _id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          models: "User",
          key: "_id",
        },
      },
      hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      access_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("upcoming", "ongoing", "completed"),
        allowNull: false,
        defaultValue: "upcoming",
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Activity",
      paranoid: true,
      indexes: [
        {
          fields: ["created_by"],
        },
        {
          unique: true,
          fields: ["_id", "access_code"],
        },
        {
          fields: ["title"],
        },
        {
          fields: ["start_date"],
        },
        {
          fields: ["end_date"],
        },
        {
          fields: ["start_date", "end_date"],
        },
        {
          fields: ["hidden"],
        },
        {
          fields: ["status"],
        },
        {
          fields: ["deletedAt"],
        },
      ],
    }
  );
  return Activity;
};
