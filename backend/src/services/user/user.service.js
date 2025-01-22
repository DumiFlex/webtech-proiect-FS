import db from "../../database/database.js";
import { to } from "await-to-js";
import { ErrorMessages } from "../../enums/index.js";
import {
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from "../../exceptions/index.js";
import { studentEmailRegex } from "../../utils/index.js";

import {
  sendActivationEmail,
  sendPasswordResetEmail,
} from "../email.service.js";
import e from "express";

export async function signUpNewUser(userData) {
  let error, activationToken, emailExists, usernameExists;

  [error, emailExists] = await to(
    db.User.findOne({
      where: { email: userData.email },
    })
  );
  if (emailExists) {
    throw new ConflictException(ErrorMessages.DUPLICATE_EMAIL_FAIL);
  }
  if (error) {
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  [error, usernameExists] = await to(
    db.User.findOne({
      where: { username: userData.username },
    })
  );
  if (usernameExists) {
    throw new ConflictException(ErrorMessages.DUPLICATE_USERNAME_FAIL);
  }
  if (error) {
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${userData.username}`;
  const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${userData.username}`;

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  userData.password_hash = userData.password;
  delete userData.password;
  delete userData.repeat_password;

  const newUser = db.User.build({
    ...userData,
    account_type: studentEmailRegex.test(userData.email)
      ? "student"
      : "professor",
    profile_picture:
      userData.gender === "male" ? boyProfilePicture : girlProfilePicture,
    status: "inactive",
  });

  [error, activationToken] = await to(newUser.generateEmailToken());

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  [error] = await to(sendActivationEmail(newUser.email, activationToken));

  if (error) {
    newUser.destroy();
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  return newUser;
}

export async function activateUser(activationToken) {
  let error, user;

  [error, user] = await to(
    db.User.findOne({
      where: { activation_token: activationToken },
    })
  );

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  if (!user) {
    throw new NotFoundException(ErrorMessages.ACTIVATION_TOKEN_INVALID);
  }

  if (user.activation_token_expiry < new Date()) {
    throw new ConflictException(ErrorMessages.ACTIVATION_TOKEN_EXPIRED);
  }

  user.activation_token = null;
  user.activation_token_expiry = null;
  user.status = "active";

  [error] = await to(user.save());

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.UPDATE_FAIL);
  }
}

export async function findUserByUsername(username) {
  let error, user;

  [error, user] = await to(db.User.findOne({ where: { username } }));

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  if (!user) {
    throw new NotFoundException(ErrorMessages.USER_NOT_FOUND);
  }

  return user;
}

export async function findUserById(_id) {
  let error, user;

  [error, user] = await to(db.User.findByPk(_id));

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  if (!user) {
    throw new NotFoundException(ErrorMessages.USER_NOT_FOUND);
  }

  return user;
}

export async function findAllUsers() {
  let error, users;

  [error, users] = await to(db.User.findAll());

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  return users;
}

export async function passwordReset(username) {
  let error, user, resetToken;

  [error, user] = await to(findUserByUsername(username));

  if (error && error.message === ErrorMessages.USER_NOT_FOUND) {
    throw new NotFoundException(ErrorMessages.USER_NOT_FOUND);
  } else if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  [error, resetToken] = await to(user.generatePasswordResetToken());

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.UPDATE_FAIL);
  }

  [error] = await to(sendPasswordResetEmail(user.email, resetToken));

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.UPDATE_FAIL);
  }
}

export async function validatePasswordResetToken(passwordResetToken) {
  let error, user;

  [error, user] = await to(
    db.User.findOne({ where: { password_reset_token: passwordResetToken } })
  );

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  if (!user) {
    throw new NotFoundException(ErrorMessages.PASSWORD_RESET_TOKEN_INVALID);
  }

  if (user.password_reset_token_expiry < new Date()) {
    throw new ConflictException(ErrorMessages.PASSWORD_RESET_TOKEN_EXPIRED);
  }
}

export async function passwordResetConfirm(passwordResetToken, newPassword) {
  let error, user;

  [error, user] = await to(
    db.User.findOne({ where: { password_reset_token: passwordResetToken } })
  );

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.GET_FAIL);
  }

  if (!user) {
    throw new NotFoundException(ErrorMessages.PASSWORD_RESET_TOKEN_INVALID);
  }

  if (user.password_reset_token_expiry < new Date()) {
    throw new ConflictException(ErrorMessages.PASSWORD_RESET_TOKEN_EXPIRED);
  }

  [error] = await to(user.resetPassword(newPassword));

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.UPDATE_FAIL);
  }
}
