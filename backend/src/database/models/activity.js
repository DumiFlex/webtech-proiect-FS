import { Model } from "sequelize";
import { to } from "await-to-js";
import { ErrorMessages } from "../../enums/index.js";
export default (sequelize, DataTypes) => {
  class Activity extends Model {
    async generateAccessCode() {
      const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
      var res = "";
      for (var i = 0; i < 6; i++) {
        var rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
      }

      this.access_code = res;

      await this.save();
    }

    async addParticipant(userId) {
      const Participants = sequelize.models.Participants;
      const [error, participant] = await to(
        Participants.create({
          user_id: userId,
          activity_id: this._id,
        })
      );

      if (error) {
        throw new ConflictException(ErrorMessages.JOIN_FAIL);
      }
    }
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
