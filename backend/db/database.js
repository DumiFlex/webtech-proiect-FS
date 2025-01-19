import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

const unresolvedDirName = path.dirname(new URL(import.meta.url).pathname);
const __dirname = unresolvedDirName.startsWith("/")
  ? unresolvedDirName.slice(1)
  : unresolvedDirName;

const env = process.env.NODE_ENV || "development";

import configModule from "../config/database.js";
const config = configModule[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const files = fs.readdirSync(path.join(__dirname, "models")).filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file.slice(-3) === ".js" &&
    file.indexOf(".test.js") === -1
  );
});

files.forEach((file) => {
  import(`./models/${file}`).then((model) => {
    const modelInstance = model.default(sequelize, Sequelize.DataTypes);
    db[modelInstance.name] = modelInstance;
  });
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
