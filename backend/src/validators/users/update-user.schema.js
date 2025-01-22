import Joi from "joi";
import { universityEmailRegex, passwordRegex } from "../../utils/index.js";
import { ValidationErrorMessages } from "../../enums/index.js";

const updateUserSchema = Joi.object({
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
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(passwordRegex)
    .messages({
      "string.pattern.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
    })
    .when(Joi.object({ old_password: Joi.exist() }).unknown(), {
      then: Joi.forbidden(),
      otherwise: Joi.required(),
    }),
  old_password: Joi.string().min(8).max(16).pattern(passwordRegex).messages({
    "string.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
  }),
  new_password: Joi.string().min(8).max(16).pattern(passwordRegex).messages({
    "string.base": ValidationErrorMessages.PASSWORD_COMPLEXITY,
  }),
  repeat_new_password: Joi.string().valid(Joi.ref("new_password")).messages({
    "any.only": ValidationErrorMessages.PASSWORD_MISMATCH,
  }),
})
  .xor("password", "old_password")
  .with("new_password", ["old_password", "repeat_new_password"])
  .with("repeat_new_password", "new_password")
  .or("username", "email")
  .or("old_password", "new_password", "repeat_new_password");

export default updateUserSchema;
