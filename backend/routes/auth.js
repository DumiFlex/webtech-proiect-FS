import express from "express";
import * as authController from "../controllers/auth.js";

export const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
