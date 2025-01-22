import { NotFoundException } from "../../exceptions/index.js";
export default function routeNotFoundExceptionHandler(req, res, next) {
  throw new NotFoundException("Route not found!");
}
