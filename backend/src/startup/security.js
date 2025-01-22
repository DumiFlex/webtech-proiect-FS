import helmet from "helmet";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

const securitySetup = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
};

export default securitySetup;
