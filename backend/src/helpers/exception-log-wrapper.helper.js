import { cliLoggerService } from "../services/index.js";
import { httpLoggerService } from "../services/logger/http-logger.service.js";
import { HTTPMessages } from "../enums/index.js";

export const exceptionLogWrapper = (error, commonMessage) => {
  const err = error;
  cliLoggerService.error("Server startup failed! ❌");
  httpLoggerService.error(
    {
      error: {
        name: HTTPMessages.INTERNAL_SERVER_ERROR,
        statusCode: 500,
        message: err.message,
        stack: err.stack,
      },
    },
    commonMessage
  );
};
