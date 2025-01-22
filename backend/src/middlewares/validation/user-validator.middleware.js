import {
  signUpUserSchema,
  activateUserSchema,
  signInUserSchema,
  passwordResetSchema,
  passwordUsernameSchema,
  passwordTokenSchema,
} from "../../validators/index.js";
import { to } from "await-to-js";
import asyncHandler from "express-async-handler";
import { BadRequestException } from "../../exceptions/index.js";

export const signUpUserValidator = asyncHandler(async (req, _, next) => {
  if (!req.body) throw new BadRequestException("Missing request body!");

  const [error] = await to(signUpUserSchema.validateAsync(req.body));
  if (error) throw new BadRequestException(error.message);
  next();
});

export const activateUserValidator = asyncHandler(async (req, _, next) => {
  if (!req.query.token)
    throw new BadRequestException("Missing activation token!");

  const [error] = await to(activateUserSchema.validateAsync(req.query));
  if (error) throw new BadRequestException(error.message);
  next();
});

export const signInUserValidator = asyncHandler(async (req, _, next) => {
  if (!req.body) throw new BadRequestException("Missing request body!");

  const [error] = await to(signInUserSchema.validateAsync(req.body));
  if (error) throw new BadRequestException(error.message);
  next();
});

export const passwordUsernameValidator = asyncHandler(async (req, _, next) => {
  if (!req.body) throw new BadRequestException("Missing request body!");

  const [error] = await to(passwordUsernameSchema.validateAsync(req.body));
  if (error) throw new BadRequestException(error.message);

  next();
});

export const passwordTokenValidator = asyncHandler(async (req, _, next) => {
  if (!req.query.token) throw new BadRequestException("Missing reset token!");

  const [error] = await to(passwordTokenSchema.validateAsync(req.query));
  if (error) throw new BadRequestException(error.message);

  next();
});

export const passwordResetValidator = asyncHandler(async (req, _, next) => {
  if (!req.body) throw new BadRequestException("Missing request body!");

  const [error] = await to(passwordResetSchema.validateAsync(req.body));
  if (error) throw new BadRequestException(error.message);

  next();
});
