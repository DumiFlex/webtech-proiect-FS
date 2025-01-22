import express from "express";
import { authValidator, userValidator } from "../middlewares/index.js";
import { userService } from "../services/index.js";
import AsyncHandler from "express-async-handler";
import { SuccessMessages, ErrorMessages } from "../enums/index.js";
import {
  generateTokenAndSetCookie,
  createUsersFilter,
} from "../utils/index.js";
import { toUserResponseDTO } from "../dtos/index.js";
import { NotImplementedException } from "../exceptions/index.js";

const controller = express.Router();

controller.post(
  "/signup",
  userValidator.signUpUserValidator,
  AsyncHandler(async (req, res) => {
    const newUser = await userService.signUpNewUser(req.body);

    const userDTO = toUserResponseDTO(newUser);
    res.status(201).send(userDTO);
  })
);

controller.post(
  "/login",
  userValidator.signInUserValidator,
  AsyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await userService.findUserByUsername(username);

    const isPasswordValid = await user.isValidPassword(password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(ErrorMessages.INVALID_CREDENTIALS);
    }

    if (!user.isActivated) {
      throw new UnauthorizedException(ErrorMessages.USER_NOT_ACTIVATED);
    }

    generateTokenAndSetCookie(res, user._id);

    res.status(200).send({ message: "Logged in successfully" });
  })
);

controller.post(
  "/logout",
  AsyncHandler(async (req, res) => {
    res.clearCookie("jwt");
    res.status(200).send({ message: "Logged out successfully!" });
  })
);

controller.post(
  "/activate",
  userValidator.activateUserValidator,
  AsyncHandler(async (req, res) => {
    const { token } = req.body;

    await userService.activateUser(token);

    res.status(200).send({ message: SuccessMessages.USER_ACTIVATED });
  })
);

controller.get(
  "/me",
  authValidator.isAuthenticated,
  AsyncHandler(async (req, res) => {
    res.status(200).send(req.user);
  })
);

controller.put(
  "/me",
  authValidator.isAuthenticated,
  //updateUserValidator,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

controller.delete(
  "/me",
  authValidator.isAuthenticated,
  //isStudentOrProffesor,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

controller.post(
  "/reset-password",
  userValidator.passwordUsernameValidator,
  AsyncHandler(async (req, res) => {
    const { username } = req.body;

    await userService.passwordReset(username);

    res.status(200).send({ message: "Email sent with reset instructions!" });
  })
);

controller.get(
  "/reset-password/validate",
  userValidator.passwordTokenValidator,
  AsyncHandler(async (req, res) => {
    const { token } = req.query;

    await userService.validatePasswordResetToken(token);

    res.status(200).send({ message: "Password reset token is valid!" });
  })
);

controller.put(
  "/reset-password",
  userValidator.passwordResetValidator,
  AsyncHandler(async (req, res) => {
    const { token, new_password } = req.body;

    await userService.passwordResetConfirm(token, new_password);

    res.status(200).send({ message: "Password reset successfully!" });
  })
);

controller.get(
  "/",
  authValidator.isAuthenticated,
  userValidator.usersParamsValidator,
  AsyncHandler(async (req, res) => {
    const filter = createUsersFilter(req.query);
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);

    const users = await userService.findAllUsers(filter, page, limit);

    const usersDTO = users.map((user) => toUserResponseDTO(user));
    res.status(200).send(usersDTO);
  })
);

controller.get(
  "/:_id",
  authValidator.isAuthenticated,
  userValidator.userIdValidator,
  AsyncHandler(async (req, res) => {
    const { _id } = req.params;

    const user = await userService.findUserById(_id);

    const userDTO = toUserResponseDTO(user);
    res.status(200).send(userDTO);
  })
);

export default controller;
