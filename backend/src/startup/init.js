import sequelizeConnect from "../database/config/sequelize.js";
import { cliLoggerService as cli } from "../services/logger/cli-logger.service.js";
import {
  exceptionLogWrapper as elw,
  exceptionLogWrapper,
} from "../helpers/index.js";
import {
  ErrorMessages,
  InfoMessages,
  SpecialMessages,
} from "../enums/index.js";
import dotenv from "dotenv";
dotenv.config();

const appSetup = async (app) => {
  try {
    await sequelizeConnect();
    cli.info(InfoMessages.DATABASE_CONNECTION_SUCCESS);
    cli.info(SpecialMessages.DOTTED_LINE);

    const APP_Port = Number(process.env.APP_Port) || 3000;

    app.listen(APP_Port, () => {
      cli.info(`Server is running on port ${APP_Port}`);
    });
  } catch (error) {
    exceptionLogWrapper(error, ErrorMessages.APP_STARTUP_FAIL);
  }
};

export default appSetup;
