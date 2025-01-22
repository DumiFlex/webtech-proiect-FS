import Joi from "joi";
import { ErrorMessages } from "../../enums/index.js";

const activateUserSchema = Joi.object({
  token: Joi.string().length(64).hex().required().messages({
    any: ErrorMessages.ACTIVATION_TOKEN_INVALID,
  }),
});

export default activateUserSchema;
