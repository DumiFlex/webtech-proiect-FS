import db from "../db/database.js";

export async function createActivity(data) {
  const { title, description, starts_at, ends_at, join_code, created_by } =
    data;

  const newActivity = await db.Activity.create({
    title,
    description,
    starts_at,
    ends_at,
    join_code,
    created_by,
    status: "pending",
  });

  if (!newActivity) {
    throw new Error("Activity not created");
  }

  return newActivity;
}
