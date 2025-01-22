import { formatHTTPLoggerResponse } from "../../utils/index.js";
import { httpLogger } from "./setup/winston-logger.setup.js";
import {
  getSuccessfulHTTPResponseMessage,
  getUnSuccessfulHTTPResponseMessage,
} from "../../utils/index.js";

class HTTPLoggerService {
  info(context, message = "") {
    return httpLogger.info(
      message ?? getSuccessfulHTTPResponseMessage(context?.req?.method),
      formatHTTPLoggerResponse(context)
    );
  }

  warn(context, message = "") {
    return httpLogger.warn(
      message ?? getUnSuccessfulHTTPResponseMessage(context?.req?.method),
      formatHTTPLoggerResponse(context)
    );
  }

  error(context, message = "") {
    return httpLogger.error(
      message ?? getUnSuccessfulHTTPResponseMessage(context?.req?.method),
      formatHTTPLoggerResponse(context)
    );
  }
}

export const httpLoggerService = new HTTPLoggerService();
