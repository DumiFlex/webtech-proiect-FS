import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import sequelizeConnect from "./config/sequelize.js";

import { getDirname, pathToFileURL } from "../utils/index.js";
const __dirname = getDirname(import.meta.url);

const __modelsPath = path.join(__dirname, "models");

const db = {};

(async () => {
  const sequelize = await sequelizeConnect();
  fs.readdirSync(__modelsPath)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 &&
        file.slice(-3) === ".js" &&
        file.indexOf(".test.js") === -1
      );
    })
    .forEach((file) => {
      import(pathToFileURL(path.join(__modelsPath, file))).then((model) => {
        const modelObj = model.default(sequelize, Sequelize.DataTypes);
        db[modelObj.name] = modelObj;
      });
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
})();

export default db;
