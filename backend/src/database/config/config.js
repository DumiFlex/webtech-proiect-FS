import dotenv from "dotenv";

dotenv.config();
export default {
  development: {
    url: process.env.DEV_PGSQL_URL,
    dialect: "postgres",
  },
  test: {
    url: process.env.TEST_PGSQL_URL,
    dialect: "postgres",
  },
  production: {
    url: process.env.PGSQL_URL,
    dialect: "postgres",
  },
};
