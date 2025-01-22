import { cliLogger } from "./setup/winston-logger.setup.js";

class CLILoggerService {
  info(message) {
    return cliLogger.info(message);
  }

  warn(message) {
    return cliLogger.warn(message);
  }

  error(message) {
    return cliLogger.error(message);
  }
}

export const cliLoggerService = new CLILoggerService();
