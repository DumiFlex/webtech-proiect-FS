import nodemailer from "nodemailer";
import { to } from "await-to-js";
import dotenv from "dotenv";
dotenv.config();

export async function sendActivationEmail(email, activationToken) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const activationLink = `http://localhost:3000/api/v1/users/activate?token=${activationToken}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Account Activation",
    text: `Click on the link below to activate your account: ${activationLink}`,
  };

  await to(transporter.sendMail(mailOptions));
}

export async function sendPasswordResetEmail(email, passwordResetToken) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const passwordResetLink = `http://localhost:3000/api/v1/users/reset-password/validate?token=${passwordResetToken}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset",
    text: `Click on the link below to reset your password: ${passwordResetLink}`,
  };

  await to(transporter.sendMail(mailOptions));
}
