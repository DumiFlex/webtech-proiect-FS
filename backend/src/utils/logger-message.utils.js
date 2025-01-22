import { ErrorMessages, SuccessMessages, HTTPMethods } from "../enums/index.js";

export const getSuccessfulHTTPResponseMessage = (responseMethod) => {
  switch (responseMethod) {
    case HTTPMethods.POST:
      return SuccessMessages.CREATE_SUCCESS;
    case HTTPMethods.GET:
      return SuccessMessages.GET_SUCCESS;
    case HTTPMethods.PUT || HTTPMethods.PATCH:
      return SuccessMessages.UPDATE_SUCCESS;
    case HTTPMethods.DELETE:
      return SuccessMessages.DELETE_SUCCESS;
    default:
      return SuccessMessages.GENERIC_SUCCESS;
  }
};

export const getUnSuccessfulHTTPResponseMessage = (responseMethod) => {
  switch (responseMethod) {
    case HTTPMethods.POST:
      return ErrorMessages.CREATE_FAIL;
    case HTTPMethods.GET:
      return ErrorMessages.GET_FAIL;
    case HTTPMethods.PUT || HTTPMethods.PATCH:
      return ErrorMessages.UPDATE_FAIL;
    case HTTPMethods.DELETE:
      return ErrorMessages.DELETE_FAIL;
    default:
      return ErrorMessages.GENERIC;
  }
};
