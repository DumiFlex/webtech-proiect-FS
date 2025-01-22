import { httpLoggerService as httpL } from "../../services/index.js";
import { HTTPStatusCode } from "../../enums/index.js";

export default function responseInterceptor(req, res, next) {
  res.requestStartTime = Date.now();

  const originalSend = res.send;

  let responseSent = false;

  res.send = function (responseBody) {
    if (!responseSent) {
      if (res.statuCode < HTTPStatusCode.BAD_REQUEST) {
        httpL.info({ req, res, responseBody });
      }
      responseSent = true;
    }

    return originalSend.call(this, responseBody);
  };

  next();
}
