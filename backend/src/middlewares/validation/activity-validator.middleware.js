import {
  createActivitySchema,
  activityIdSchema,
} from "../../validators/index.js";
import { to } from "await-to-js";
import asyncHandler from "express-async-handler";
import { BadRequestException } from "../../exceptions/index.js";

export const activityCreateValidator = asyncHandler(async (req, _, next) => {
  if (!req.body) throw new BadRequestException("Missing request body!");

  const [error] = await to(createActivitySchema.validateAsync(req.body));
  if (error) throw new BadRequestException(error.message);

  next();
});

export const activityIdValidator = asyncHandler(async (req, _, next) => {
  if (!req.params._id) throw new BadRequestException("Missing activity id!");

  const [error] = await to(activityIdSchema.validateAsync(req.params));
  if (error) throw new BadRequestException(error.message);

  next();
});

export const joinActivityValidator = asyncHandler(async (req, _, next) => {
  if (!req.params._id) throw new BadRequestException("Missing activity id!");

  const [error] = await to(activityIdSchema.validateAsync(req.params));
  if (error) throw new BadRequestException(error.message);

  next();
});
