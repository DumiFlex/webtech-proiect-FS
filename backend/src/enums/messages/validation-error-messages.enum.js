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
});
