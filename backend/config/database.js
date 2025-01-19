import dotenv from "dotenv";
dotenv.config({ path: ".././.env" });

export default {
  development: {
    use_env_variable: "DB_URL",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  },
  test: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    logging: false,
  },
  production: {
    use_env_variable: "DB_URL",
    dialect: "postgres",
    logging: false,
  },
};
