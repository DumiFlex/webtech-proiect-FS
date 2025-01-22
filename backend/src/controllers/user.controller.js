import express from "express";
import {
  signUpUserValidator,
  activateUserValidator,
  signInUserValidator,
  isAuthenticated,
  passwordResetValidator,
  passwordTokenValidator,
  passwordUsernameValidator,
} from "../middlewares/index.js";
import {
  signUpNewUser,
  activateUser,
  findUserByUsername,
  findAllUsers,
  passwordReset,
  validatePasswordResetToken,
  passwordResetConfirm,
} from "../services/index.js";
import AsyncHandler from "express-async-handler";
import { SuccessMessages, ErrorMessages } from "../enums/index.js";
import generateTokenAndSetCookie from "../utils/generate-token-and-set-cookie.utils.js";
import { toUserResponseDTO } from "../dtos/index.js";

const controller = express.Router();

controller.post(
  "/signup",
  signUpUserValidator,
  AsyncHandler(async (req, res) => {
    const newUser = await signUpNewUser(req.body);
    generateTokenAndSetCookie(res, newUser._id);

    const userDTO = toUserResponseDTO(newUser);
    res.status(201).send(userDTO);
  })
);

controller.post(
  "/login",
  signInUserValidator,
  AsyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    const isPasswordValid = await user.isValidPassword(password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(ErrorMessages.INVALID_CREDENTIALS);
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

controller.get(
  "/activate",
  activateUserValidator,
  AsyncHandler(async (req, res) => {
    const { token } = req.query;

    await activateUser(token);

    res.status(200).send({ message: SuccessMessages.USER_ACTIVATED });
  })
);

controller.get(
  "/me",
  isAuthenticated,
  AsyncHandler(async (req, res) => {
    res.status(200).send(req.user);
  })
);

controller.post(
  "/reset-password",
  passwordUsernameValidator,
  AsyncHandler(async (req, res) => {
    const { username } = req.body;

    await passwordReset(username);

    res.status(200).send({ message: "Email sent with reset instructions!" });
  })
);

controller.get(
  "/reset-password/validate",
  passwordTokenValidator,
  AsyncHandler(async (req, res) => {
    const { token } = req.query;

    await validatePasswordResetToken(token);

    res.status(200).send({ message: "Password reset token is valid!" });
  })
);

controller.put(
  "/reset-password",
  passwordResetValidator,
  AsyncHandler(async (req, res) => {
    const { token, new_password } = req.body;

    await passwordResetConfirm(token, new_password);

    res.status(200).send({ message: "Password reset successfully!" });
  })
);

controller.get(
  "/",
  isAuthenticated,
  AsyncHandler(async (req, res) => {
    const users = await findAllUsers();

    const usersDTO = users.map((user) => toUserResponseDTO(user));
    res.status(200).send(usersDTO);
  })
);

export default controller;
