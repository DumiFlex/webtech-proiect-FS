import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import db from "./db/database.js";
import { router } from "./routes/config.js";

const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", router);

try {
  await db.sequelize.authenticate();
  console.log("Connection has been established successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
