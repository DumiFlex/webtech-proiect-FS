import Joi from "joi";
import { ValidationErrorMessages } from "../../enums/index.js";
import { universityEmailRegex, nameRegex } from "../../utils/index.js";

const passwordUsernameSchema = Joi.object({
  status: Joi.string().valid("active", "inactive", "banned").messages({
    "string.base": ValidationErrorMessages.STATUS,
  }),
  first_name: Joi.string().min(3).max(20).trim().pattern(nameRegex).messages({
    "string.pattern.base": ValidationErrorMessages.NAME_REGEX,
  }),
  last_name: Joi.string().min(3).max(20).trim().pattern(nameRegex).messages({
    "string.pattern.base": ValidationErrorMessages.NAME_REGEX,
  }),
  username: Joi.string().alphanum().min(3).max(20).messages({
    "string.alphanum": ValidationErrorMessages.USERNAME,
  }),
  email: Joi.string()
    .email()
    .pattern(universityEmailRegex)
    .lowercase()
    .messages({
      "string.pattern.base": ValidationErrorMessages.INVALID_EMAIL,
    }),
  gender: Joi.string().valid("male", "female").messages({
    "string.base": ValidationErrorMessages.GENDER,
  }),
  search: Joi.string().messages({
    "string.base": ValidationErrorMessages.SEARCH,
  }),
  userType: Joi.string().valid("student", "professor").messages({
    "string.base": ValidationErrorMessages.USER_TYPE,
  }),
  limit: Joi.number().min(1).max(100).messages({
    "number.base": ValidationErrorMessages.LIMIT,
  }),
  page: Joi.number().min(1).messages({
    "number.base": ValidationErrorMessages.OFFSET,
  }),
});

export default passwordUsernameSchema;
