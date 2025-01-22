import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { randomBytes } from "crypto";
import { LogIndentation } from "../../../enums/logger/log-indentation.enum.js";
import dotenv from "dotenv";
dotenv.config();

const { combine, timestamp, json, printf, colorize, label } = winston.format;
const timestampFormat = "DD-MM-YYYY HH:mm:ss";

const appVersion = process.env.npm_package_version;

const generateLogId = () => randomBytes(16).toString("hex");

export const httpLogger = winston.createLogger({
  format: combine(
    timestamp({ format: timestampFormat }),
    json(),
    printf(({ timestamp, level, message, ...data }) => {
      const response = {
        level,
        logId: generateLogId(),
        timestamp,
        appInfo: {
          appVersion,
          environment: process.env.NODE_ENV,
          processId: process.pid,
        },
        message,
        data,
      };
      return JSON.stringify(response, null, LogIndentation.MD);
    })
  ),
  transports: [
    new winston.transports.Console({
      silent: process.env.NODE_ENV === "test",
    }),

    new DailyRotateFile({
      filename: "logs/http-%DATE%.log",
      datePattern: "DD-MM-YYYY",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export const cliLogger = winston.createLogger({
  format: combine(
    label({ label: appVersion }),
    timestamp({ format: timestampFormat }),
    colorize({ level: true }),
    printf(({ level, message, label, timestamp }) => {
      return `[${timestamp}] ${level} (${label}): ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
