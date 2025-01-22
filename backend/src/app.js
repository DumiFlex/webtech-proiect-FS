import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import appSetup from "./startup/init.js";
import securitySetup from "./startup/security.js";
import routerSetup from "./startup/router.js";

import { NodeProcessEvents } from "./enums/index.js";
import { ErrorMessages } from "./enums/index.js";
import { exceptionLogWrapper as elw } from "./helpers/index.js";

process.on(NodeProcessEvents.UNCAUGHT_EXCEPTION, (error) => {
  elw(error, ErrorMessages.UNCAUGHT_EXCEPTION);
  process.exit(1);
});

process.on(NodeProcessEvents.UNHANDLED_REJECTION, (error) => {
  elw(error, ErrorMessages.UNHANDLED_REJECTION);
  process.exit(1);
});

appSetup(app);
securitySetup(app);
routerSetup(app);
