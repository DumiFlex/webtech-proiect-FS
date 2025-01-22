import Joi from "joi";
import {
  universityEmailRegex,
  passwordRegex,
  nameRegex,
} from "../../utils/index.js";
import { ValidationErrorMessages } from "../../enums/index.js";

const signUpUserSchema = Joi.object({
  first_name: Joi.string()
    .min(3)
    .max(20)
    .trim()
    .pattern(nameRegex)
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.NAME_REGEX,
    }),
  last_name: Joi.string()
    .min(3)
    .max(20)
    .trim()
    .pattern(nameRegex)
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.NAME_REGEX,
    }),
  username: Joi.string().alphanum().min(3).max(20).required().messages({
    "string.alphanum": ValidationErrorMessages.USERNAME,
  }),
  email: Joi.string()
    .email()
    .pattern(universityEmailRegex)
    .lowercase()
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.INVALID_EMAIL,
    }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
    }),
  repeat_password: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": ValidationErrorMessages.PASSWORD_MISMATCH,
  }),
  gender: Joi.string().valid("male", "female").required().messages({
    "string.base": ValidationErrorMessages.GENDER,
  }),
});

export default signUpUserSchema;
