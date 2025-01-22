import db from "../../database/database.js";
import { to } from "await-to-js";
import { ErrorMessages } from "../../enums/index.js";
import {
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from "../../exceptions/index.js";

export async function createActivity(req) {
  let error;

  const newActivity = db.Activity.build({
    title: req.body.title,
    description: req.body.description,
    start_date: new Date(req.body.start_date),
    end_date: new Date(req.body.end_date),
    created_by: req.user._id,
    hidden: false,
    icon: "not implemented",
    color_code: "not implemented",
    status: "upcoming",
  });

  [error] = await to(newActivity.generateAccessCode());

  if (error) {
    throw new InternalServerErrorException(ErrorMessages.CREATE_FAIL);
  }

  return newActivity;
}

export async function findActivityById(activityId) {
  let error;

  const activity = await db.Activity.findOne({
    where: { _id: activityId },
  });

  if (!activity) {
    throw new NotFoundException(ErrorMessages.NOT_FOUND);
  }

  return activity;
}

export async function joinActivity(_id, userId) {
  let error;

  const activity = await findActivityById(_id);

  [error] = await to(activity.addParticipant(userId));

  if (error) {
    throw new ConflictException(ErrorMessages.JOIN_FAIL);
  }

  return activity;
}
