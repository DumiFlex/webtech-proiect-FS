import express from "express";
import AsyncHandler from "express-async-handler";

import { authValidator, activityValidator } from "../middlewares/index.js";

import { activityService } from "../services/index.js";

import { toActivityResponseDTO } from "../dtos/index.js";
import { NotImplementedException } from "../exceptions/index.js";

const controller = express.Router();

// Create new activity using POST api/v1/activities
controller.post(
  "/",
  authValidator.isAuthenticated,
  authValidator.isProffesor,
  activityValidator.activityCreateValidator,
  AsyncHandler(async (req, res) => {
    const newActivity = await activityService.createActivity(req);
    const activityDTO = toActivityResponseDTO(newActivity);
    res.status(201).send(activityDTO);
  })
);

//TODO: Implement update activity using PUT api/v1/activities/:_id
// Update activity using PUT api/v1/activities/:_id
controller.put(
  "/:_id",
  authValidator.isAuthenticated,
  authValidator.isProffesorOrAdmin,
  activityValidator.activityIdValidator,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

// Delete activity using DELETE api/v1/activities/:_id
controller.delete(
  "/:_id",
  authValidator.isAuthenticated,
  authValidator.isProffesorOrAdmin,
  activityValidator.activityIdValidator,
  AsyncHandler(async (req, res) => {
    await activityService.deleteActivity(req.params._id);
    res.status(204).send();
  })
);

// Get activity by id using GET api/v1/activities/:_id
controller.get(
  "/:_id",
  authValidator.isAuthenticated,
  activityValidator.activityIdValidator,
  AsyncHandler(async (req, res) => {
    const activity = await activityService.findActivityById(req.params._id);
    const activityDTO = toActivityResponseDTO(activity);
    res.status(200).send(activityDTO);
  })
);

//TODO: Implement join activity using POST api/v1/activities/:_id/participants
// Join activity using POST api/v1/activities/:_id/participants
controller.post(
  "/:_id/participants",
  authValidator.isAuthenticated,
  authValidator.isStudent,
  activityValidator.joinActivityValidator,
  AsyncHandler(async (req, res) => {
    await activityService.joinActivity(req.params._id, req.user._id);
    res.status(200).send();
  })
);

//TODO: Implement leave activity using DELETE api/v1/activities/:_id/participants
// Leave activity using DELETE api/v1/activities/:_id/participants
controller.delete(
  "/:_id/participants",
  authValidator.isAuthenticated,
  authValidator.isStudent,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

//TODO: Implement remove participant from activity using DELETE api/v1/activities/:_id/participants/:_id
// Remove participant from activity using DELETE api/v1/activities/:_id/participants/:_id
controller.delete(
  "/:_id/participants/:_id",
  authValidator.isAuthenticated,
  authValidator.isProffesorOrAdmin,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

//TODO: Implement get feedback for activity using GET api/v1/activities/:_id/feedback
// Get feedback for activity using GET api/v1/activities/:_id/feedback
controller.get(
  "/:_id/feedback",
  authValidator.isAuthenticated,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

//TODO: Implement get participants for activity using GET api/v1/activities/:_id/participants
// Get participants for activity using GET api/v1/activities/:_id/participants
controller.get(
  "/:_id/participants",
  authValidator.isAuthenticated,
  authValidator.isProffesorOrAdmin,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

//TODO: Implement add feedback for activity using POST api/v1/activities/:_id/feedback
// Add feedback for activity using POST api/v1/activities/:_id/feedback
controller.post(
  "/:_id/feedback",
  authValidator.isAuthenticated,
  authValidator.isStudent,
  AsyncHandler(async (req, res) => {
    throw new NotImplementedException();
  })
);

export default controller;
