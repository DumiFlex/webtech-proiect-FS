import express from "express";
import { router as usersRouter } from "./users.js";
import { router as authRouter } from "./auth.js";
import { router as activitiesRouter } from "./activities.js";

export const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/activities", activitiesRouter);
