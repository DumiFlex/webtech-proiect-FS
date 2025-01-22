import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

let sequelize;

export default async function sequelizeConnect() {
  if (!sequelize) {
    if (process.env.NODE_ENV === "development") {
      sequelize = new Sequelize(process.env.DEV_PGSQL_URL, {
        logging: false,
      });
    } else if (process.env.NODE_ENV === "test") {
      sequelize = new Sequelize(process.env.TEST_PGSQL_URL, {
        logging: false,
      });
    } else {
      sequelize = new Sequelize(process.env.PGSQL_URL, {
        logging: false,
      });
    }

    await sequelize.authenticate();
  }
  return sequelize;
}

export async function syncModels() {
  const sequelize = await sequelizeConnect();
  await sequelize.sync();
}

export async function syncModelsForce() {
  const sequelize = await sequelizeConnect();
  await sequelize.sync({ force: true });
}
