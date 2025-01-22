import db from "../database/database.js";

export default async function generateUniqueUserId() {
  let userId;
  let isUnique = false;

  while (!isUnique) {
    userId = Math.floor(100000000 + Math.random() * 900000000);

    const existingUser = await db.User.findByPk(userId);

    if (!existingUser) {
      isUnique = true;
    }
  }

  return userId;
}
