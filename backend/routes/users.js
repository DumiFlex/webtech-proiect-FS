import express from "express";
import * as usersController from "../controllers/users.js";
import {
  userIsAuthenticated,
  userIsAdmin,
} from "../middlewares/protectRoutes.js";

export const router = express.Router();

router.get("/", userIsAuthenticated, userIsAdmin, usersController.getAllUsers);
router.get("/@me", userIsAuthenticated, usersController.getMe);
router.get(
  "/:id",
  userIsAuthenticated,
  userIsAdmin,
  usersController.getUserById
);
router.post("/", userIsAuthenticated, userIsAdmin, usersController.createUser);
router.put("/@me", userIsAuthenticated, usersController.updateMe);
router.put(
  "/:id",
  userIsAuthenticated,
  userIsAdmin,
  usersController.updateUser
);
router.delete("/@me", userIsAuthenticated, usersController.deleteMe);
router.delete(
  "/:id",
  userIsAuthenticated,
  userIsAdmin,
  usersController.deleteUser
);
