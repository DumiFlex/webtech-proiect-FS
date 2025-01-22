import Joi from "joi";
import { ErrorMessages } from "../../enums/index.js";

const activityIdSchema = Joi.object({
  _id: Joi.string().uuid().required().messages({
    "string.uuid": ErrorMessages.INVALID_USER_ID,
    "any.required": ErrorMessages.INVALID_USER_ID,
  }),
});

export default activityIdSchema;
