import * as activitiesService from "../services/activities.js";
import generateActivityCode from "../utils/generateActivityCode.js";

export async function createActivity(req, res) {
  const { user } = req;
  let { title, description, starts_at, ends_at } = req.body;

  if (!title || !description || !starts_at || !ends_at) {
    return res.status(400).json({ error: "Missing required information" });
  }

  starts_at = new Date(starts_at);
  ends_at = new Date(ends_at);

  if (starts_at >= ends_at) {
    return res.status(400).json({
      error: "End date must be greater than start date",
    });
  }

  const activityCode = generateActivityCode();

  try {
    const activityData = {
      title,
      description,
      join_code: activityCode,
      starts_at,
      ends_at,
      created_by: user.id,
    };

    await activitiesService
      .createActivity(activityData)
      .then((activity) => {
        res.status(201).json({
          message: "Activity created successfully",
          activity: activity,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
