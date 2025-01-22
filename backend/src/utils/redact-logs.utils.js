import { SensitiveKeys, SpecialMessages } from "../enums/index.js";
import { Model } from "sequelize";

const sensitiveKeysList = Object.values(SensitiveKeys);

export default function redactLogData(data) {
  // if (data instanceof Model) {
  //   data = data.toJSON();
  // }

  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return data.map((item) => redactLogData(item));
    }

    const redactedData = {};

    for (const key in data) {
      if (sensitiveKeysList.includes(key)) {
        redactedData[key] = SpecialMessages.REDACTED;
      } else {
        redactedData[key] = redactLogData(data[key]);
      }
    }

    return redactedData;
  } else {
    return data;
  }
}
