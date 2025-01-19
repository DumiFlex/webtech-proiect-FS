import bcrypt from "bcryptjs";
import db from "../db/database.js";

export async function createUser(data) {
  const { userType, firstName, lastName, username, email, password, gender } =
    data;

  const usernameExists = await db.User.findOne({ where: { username } });
  const emailExists = await db.User.findOne({ where: { email } });

  if (usernameExists) {
    throw new Error("Username already exists");
  }

  if (emailExists) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  const newUser = await db.User.create({
    userType,
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
    gender,
    profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture,
  });

  if (!newUser) {
    throw new Error("User not created");
  }

  return newUser;
}

export async function getAllUsers(filter, limit = 10, offset = 0) {
  try {
    const users = await db.User.findAll({
      where: filter,
      limit: limit,
      offset: offset,
    });
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserById(id) {
  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserByUsername(username) {
  try {
    const user = await db.User.findOne({ where: { username } });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUser(id, data) {
  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }

    const {
      userType,
      firstName,
      lastName,
      username,
      email,
      password,
      newPassword,
      gender,
      profilePicture,
    } = data;

    if (!password) {
      throw new Error("Password is required");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }

    if (newPassword) {
      const isPasswordSame = await bcrypt.compare(newPassword, user.password);

      if (isPasswordSame) {
        throw new Error("New password must be different from the old password");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
    }

    if (email) {
      const emailExists = await db.User.findOne({ where: { email } });

      if (emailExists && email !== user.email) {
        throw new Error("Email already exists");
      }

      user.email = email;
    }

    if (username) {
      const usernameExists = await db.User.findOne({ where: { username } });

      if (usernameExists && username !== user.username) {
        throw new Error("Username already exists");
      }

      user.username = username;
    }

    if (userType && !["student", "teacher"].includes(userType)) {
      throw new Error("Invalid user type");
    } else if (userType) {
      user.userType = userType;
    }

    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    if (gender && gender !== user.gender) {
      const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${
        username ? username : user.username
      }`;
      const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${
        username ? username : user.username
      }`;

      user.gender = gender;
      user.profilePicture =
        gender === "male" ? boyProfilePicture : girlProfilePicture;
    }

    await user.save();

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUser(id) {
  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }

    await user.destroy();

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
