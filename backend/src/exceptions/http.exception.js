import createError from "http-errors";
import { HTTPStatusCode, HTTPMessages } from "../enums/index.js";

export class BadRequestException {
  constructor(message = HTTPMessages.BAD_REQUEST) {
    throw createError(HTTPStatusCode.BAD_REQUEST, message);
  }
}

export class UnauthorizedException {
  constructor(message = HTTPMessages.UNAUTHORIZED) {
    throw createError(HTTPStatusCode.UNAUTHORIZED, message);
  }
}

export class NotFoundException {
  constructor(message = HTTPMessages.NOT_FOUND) {
    throw createError(HTTPStatusCode.NOT_FOUND, message);
  }
}

export class ConflictException {
  constructor(message = HTTPMessages.CONFLICT) {
    throw createError(HTTPStatusCode.CONFLICT, message);
  }
}

export class UnprocessableEntityException {
  constructor(message = HTTPMessages.UNPROCESSABLE_ENTITY) {
    throw createError(HTTPStatusCode.UNPROCESSABLE_ENTITY, message);
  }
}

export class TooManyRequestsException {
  constructor(message = HTTPMessages.TOO_MANY_REQUESTS) {
    throw createError(HTTPStatusCode.TOO_MANY_REQUESTS, message);
  }
}

export class InternalServerErrorException {
  constructor(message = HTTPMessages.INTERNAL_SERVER_ERROR) {
    throw createError(HTTPStatusCode.INTERNAL_SERVER_ERROR, message);
  }
}

export class BadGatewayException {
  constructor(message = HTTPMessages.BAD_GATEWAY) {
    throw createError(HTTPStatusCode.BAD_GATEWAY, message);
  }
}

export class NotImplementedException {
  constructor(message = HTTPMessages.NOT_IMPLEMENTED) {
    throw createError(HTTPStatusCode.NOT_IMPLEMENTED, message);
  }
}
