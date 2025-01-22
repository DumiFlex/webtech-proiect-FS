import Joi from "joi";
import {
  universityEmailRegex,
  passwordRegex,
  nameRegex,
} from "../../utils/index.js";
import { ValidationErrorMessages } from "../../enums/index.js";

const signUpUserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required().messages({
    "string.alphanum": ValidationErrorMessages.USERNAME,
  }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.pattern.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
    }),
});

export default signUpUserSchema;
