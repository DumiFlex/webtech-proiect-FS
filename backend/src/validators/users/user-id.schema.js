import Joi from "joi";
import { ErrorMessages } from "../../enums/index.js";

const userIdSchema = Joi.object({
  _id: Joi.string()
    .pattern(/^\d{9}$/)
    .required()
    .messages({
      "string.pattern.base": ErrorMessages.INVALID_USER_ID,
      "any.required": ErrorMessages.INVALID_USER_ID,
    }),
});

export default userIdSchema;
