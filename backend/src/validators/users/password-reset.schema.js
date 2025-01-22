import Joi from "joi";
import { ValidationErrorMessages, ErrorMessages } from "../../enums/index.js";
import { passwordRegex } from "../../utils/index.js";

export const passwordUsernameSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required().messages({
    "string.alphanum": ValidationErrorMessages.USERNAME,
  }),
});

export const passwordResetSchema = Joi.object({
  token: Joi.string().length(64).hex().required().messages({
    any: ErrorMessages.ACTIVATION_TOKEN_INVALID,
  }),
  new_password: Joi.string()
    .min(8)
    .max(16)
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
    }),
  repeat_new_password: Joi.string()
    .valid(Joi.ref("new_password"))
    .required()
    .messages({
      "any.only": ValidationErrorMessages.PASSWORD_MISMATCH,
    }),
});

export const passwordTokenSchema = Joi.object({
  token: Joi.string().length(64).hex().required().messages({
    any: ErrorMessages.ACTIVATION_TOKEN_INVALID,
  }),
});
