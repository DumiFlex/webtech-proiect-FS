import express from "express";
import * as activitiesController from "../controllers/activities.js";
import {
  userIsAdminOrTeacher,
  userIsAuthenticated,
} from "../middlewares/protectRoutes.js";

export const router = express.Router();

router.post(
  "/",
  userIsAuthenticated,
  userIsAdminOrTeacher,
  activitiesController.createActivity
);
/*router.get(
  "/",
  userIsAuthenticated,
  userIsAdmin,
  activitiesController.getAllActivities
);
router.get(
  "/me/created",
  userIsAdminOrTeacher,
  activitiesController.searchActivities
);
router.get(
  "/me/attended",
  userIsAuthenticated,
  activitiesController.searchActivities
);
router.get("/:id", userIsAdminOrTeacher, activitiesController.getActivity);
router.put("/:id", userIsAdminOrTeacher, activitiesController.updateActivity);
router.delete("/:id", userIsAdmin, activitiesController.deleteActivity);
router.post(
  "/:id/join",
  userIsAuthenticated,
  activitiesController.addParticipant
);
router.post(
  "/:id/leave",
  userIsAuthenticated,
  activitiesController.removeParticipant
);
router.post(
  "/:id/participants",
  userIsAdminOrTeacher,
  activitiesController.getParticipants
);
router.get("/:id/events", userIsAuthenticated, activitiesController.getEvents);
router.post(
  "/:id/events",
  userIsAuthenticated,
  activitiesController.createEvent
);*/
