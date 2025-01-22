import { ErrorMessages } from "../../enums/index.js";
import {
  httpLoggerService as httpL,
  cliLoggerService as cli,
} from "../../services/index.js";

export default function exceptionHandler(error, req, res, next) {
  const statusCode = error.statusCode ?? 500;
  const message =
    typeof error.message === "string" ? error.message : ErrorMessages.GENERIC;
  httpL.error({ req, res, error }, message);

  return res.status(statusCode).send({ statusCode, message });
}
