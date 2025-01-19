import * as usersService from "../services/users.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    gender,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const userData = {
      userType: "student",
      firstName,
      lastName,
      username,
      email,
      password,
      gender,
    };

    const newUser = await usersService.createUser(userData);

    if (newUser) {
      generateTokenAndSetCookie(newUser.id, res);

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in signup controller", error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await usersService.getUserByUsername(username);

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user.id, res);

    res.status(200).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in login controller", error: error.message });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in logout controller", error: error.message });
  }
}
