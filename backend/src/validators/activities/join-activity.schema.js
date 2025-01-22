import Joi from "joi";
import { ErrorMessages } from "../../enums/index.js";

const joinActivitySchema = Joi.object({
  _id: Joi.string().uuid().required().messages({
    "string.uuid": ErrorMessages.INVALID_ACTIVITY_ID,
    "any.required": ErrorMessages.INVALID_ACTIVITY_ID,
  }),
});

export default joinActivitySchema;
