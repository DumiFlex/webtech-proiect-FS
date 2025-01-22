import Joi from "joi";
import {
  universityEmailRegex,
  passwordRegex,
  nameRegex,
} from "../../utils/index.js";
import { ValidationErrorMessages } from "../../enums/index.js";

const createActivitySchema = Joi.object({
  title: Joi.string().min(3).max(50).trim().required().messages({
    "string.base": ValidationErrorMessages.TITLE,
  }),
  description: Joi.string().min(10).max(500).trim().required().messages({
    "string.base": ValidationErrorMessages.DESCRIPTION,
  }),
  start_date: Joi.date().required().messages({
    "date.base": ValidationErrorMessages.START_DATE,
  }),
  end_date: Joi.date().required().messages({
    "date.base": ValidationErrorMessages.END_DATE,
  }),
});

export default createActivitySchema;
