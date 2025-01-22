import dotenv from "dotenv";
dotenv.config();
import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { UnauthorizedException } from "../../exceptions/index.js";
import { userService } from "../../services/index.js";
import { to } from "await-to-js";
import { toUserResponseDTO } from "../../dtos/index.js";

export const isAuthenticated = AsyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new UnauthorizedException("Unauthorized");
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
    if (err) {
      throw new UnauthorizedException("Unauthorized");
    }

    const [error, user] = await to(userService.findUserById(decodedToken._id));

    if (error) {
      throw new UnauthorizedException("Unauthorized");
    }

    const userDTO = toUserResponseDTO(user);

    req.user = userDTO;
    next();
  });
});

export const isAdmin = AsyncHandler(async (req, res, next) => {
  if (!req.user.user_type === "admin") {
    throw new UnauthorizedException("Unauthorized");
  }
  next();
});

export const isStudent = AsyncHandler(async (req, res, next) => {
  if (!req.user.user_type === "student") {
    throw new UnauthorizedException("Unauthorized");
  }
  next();
});

export const isProffesor = AsyncHandler(async (req, res, next) => {
  if (!req.user.user_type === "proffesor") {
    throw new UnauthorizedException("Unauthorized");
  }
  next();
});

export const isStudentOrProffesor = AsyncHandler(async (req, res, next) => {
  if (
    !req.user.user_type === "student" ||
    !req.user.user_type === "proffesor"
  ) {
    throw new UnauthorizedException("Unauthorized");
  }
  next();
});

export const isProffesorOrAdmin = AsyncHandler(async (req, res, next) => {
  if (!req.user.user_type === "proffesor" || !req.user.user_type === "admin") {
    throw new UnauthorizedException("Unauthorized");
  }
  next();
});
