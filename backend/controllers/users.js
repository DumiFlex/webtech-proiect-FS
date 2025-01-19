import * as usersService from "../services/users.js";
import { Op } from "sequelize";

export async function createUser(req, res) {
  const { userType, firstName, lastName, username, email, password, gender } =
    req.body;

  if (
    !userType ||
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !gender
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!["student", "teacher"].includes(userType)) {
    return res.status(400).json({ error: "Invalid user type" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  try {
    const userData = {
      userType,
      firstName,
      lastName,
      username,
      email,
      password,
      gender,
    };

    const newUser = await usersService.createUser(userData);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function getAllUsers(req, res) {
  try {
    const {
      userType,
      firstName,
      lastName,
      username,
      email,
      gender,
      search,
      limit,
      offset,
    } = req.query;

    const filter = {};

    const validEnumValues = {
      userType: ["admin", "student", "teacher"],
      gender: ["male", "female"],
    };

    const isValidEnumValue = (field, value) =>
      validEnumValues[field] && validEnumValues[field].includes(value);

    if (userType) {
      if (!isValidEnumValue("userType", userType)) {
        return res.status(400).json({ error: "Invalid user type" });
      }
      filter.userType = { [Op.eq]: userType };
    }
    if (gender) {
      if (!isValidEnumValue("gender", gender)) {
        return res.status(400).json({ error: "Invalid gender type" });
      }
      filter.gender = { [Op.eq]: gender };
    }
    if (firstName) filter.firstName = { [Op.iLike]: `%${firstName}%` };
    if (lastName) filter.lastName = { [Op.iLike]: `%${lastName}%` };
    if (username) filter.username = { [Op.iLike]: `%${username}%` };
    if (email) filter.email = { [Op.iLike]: `%${email}%` };
    if (search) {
      filter[Op.or] = [];

      if (isValidEnumValue("userType", search)) {
        filter[Op.or].push({ userType: { [Op.eq]: search } });
      }

      if (isValidEnumValue("gender", search)) {
        filter[Op.or].push({ gender: { [Op.eq]: search } });
      }

      filter[Op.or].push(
        { firstName: { [Op.iLike]: `%${search}%` } },
        { lastName: { [Op.iLike]: `%${search}%` } },
        { username: { [Op.iLike]: `%${search}%` } },
        { email: { [Op.iLike]: `%${search}%` } }
      );
    }

    const users = await usersService.getAllUsers(
      filter,
      limit?.toInt(),
      offset?.toInt()
    );

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function getUserById(req, res) {
  const { id } = req.params;

  try {
    await usersService
      .getUserById(id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(404).json({ error: error.message });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function getMe(req, res) {
  const { user } = req;
  res.status(200).json(user);
}

export async function updateMe(req, res) {
  const { user } = req;
  const {
    userType,
    firstName,
    lastName,
    username,
    email,
    password,
    newPassword,
    gender,
  } = req.body;

  try {
    const userData = {};
    if (userType) userData.userType = userType;
    if (firstName) userData.firstName = firstName;
    if (lastName) userData.lastName = lastName;
    if (username) userData.username = username;
    if (email) userData.email = email;
    if (password) userData.password = password;
    if (newPassword) userData.newPassword = newPassword;
    if (gender) userData.gender = gender;

    await usersService
      .updateUser(user.id, userData)
      .then((user) => {
        const userData = user.get({ plain: true });
        delete userData.password;
        res.status(200).json(userData);
      })
      .catch((error) => {
        res.status(404).json({ error: error.message });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function deleteMe(req, res) {
  const { user } = req;

  try {
    await usersService
      .deleteUser(user.id)
      .then(() => {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        res.status(404).json({ error: error.message });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const {
    userType,
    firstName,
    lastName,
    username,
    email,
    password,
    newPassword,
    gender,
  } = req.body;
  try {
    const userData = {};
    if (userType) userData.userType = userType;
    if (firstName) userData.firstName = firstName;
    if (lastName) userData.lastName = lastName;
    if (username) userData.username = username;
    if (email) userData.email = email;
    if (password) userData.password = password;
    if (newPassword) userData.newPassword = newPassword;
    if (gender) userData.gender = gender;

    await usersService
      .updateUser(id, userData)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(404).json({ error: error.message });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await usersService
      .deleteUser(id)
      .then(() => {
        res.status(200).json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        res.status(404).json({ error: error.message });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
