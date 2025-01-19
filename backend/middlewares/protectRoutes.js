import jwt from "jsonwebtoken";
import db from "../db/database.js";

export function userIsAuthenticated(req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. No token provided.",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
      if (error) {
        return res.status(401).json({
          message: "Unauthorized. Invalid token.",
        });
      }

      const user = await db.User.findByPk(decoded.userId, {
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      req.user = user;

      next();
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
}

export function userIsAdmin(req, res, next) {
  try {
    if (req.user.userType !== "admin") {
      return res.status(403).json({
        message: "Forbidden. Admin access only.",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
}

export function userIsTeacher(req, res, next) {
  try {
    if (req.user.userType !== "teacher") {
      return res.status(403).json({
        message: "Forbidden. Teacher access only.",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
}

export function userIsAdminOrTeacher(req, res, next) {
  try {
    if (req.user.userType !== "admin" && req.user.userType !== "teacher") {
      return res.status(403).json({
        message: "Forbidden. Admin or Teacher access only.",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
}
