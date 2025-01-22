export const ValidationErrorMessages = Object.freeze({
  NAME_REGEX: "First name must contain only letters!",
  USERNAME: "Username must contain only alphanumeric characters!",
  PASSWORD_MISMATCH: "Passwords must match!",
  PASSWORD_COMPLEXITY:
    "Password must be between 8 and 16 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
  INVALID_EMAIL:
    "Email must be an university email address (e.g. john.doe@csie.ase.ro)",
  GENDER: "Gender must be one of the following: male, female",
  ACCOUNT_TYPE: "Account type must be one of the following: student, professor",
  PROFILE_PICTURE: "Profile picture must be a valid URL",
  SEARCH: "Search must be a string",
  USER_TYPE: "User type must be one of the following: student, professor",
  LIMIT: "Limit must be a number between 1 and 100",
  OFFSET: "Offset must be a number greater than 0",
  STATUS: "Status must be one of the following: active, inactive, banned",
  TITLE: "Title must be a string",
  DESCRIPTION: "Description must be a string",
  START_DATE: "Start date must be a valid date",
  END_DATE: "End date must be a valid date",
});
