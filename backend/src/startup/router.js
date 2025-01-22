import { usersRouter } from "../controllers/index.js";
import {
  responseInterceptor,
  exceptionHandler,
  routeNotFoundExceptionHandler,
} from "../middlewares/index.js";

const routerSetup = (app) => {
  app
    .use(responseInterceptor)
    .use("/api/v1/users", usersRouter)
    .use("*", routeNotFoundExceptionHandler)
    .use(exceptionHandler);
};

export default routerSetup;
