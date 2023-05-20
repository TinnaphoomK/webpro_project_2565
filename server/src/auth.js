import express from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as yup from "yup";

const prisma = new PrismaClient();
const router = express.Router();

// Define Yup validation schemas
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(20),
});

const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
  newPassword: yup.string().required().min(8).max(20),
});

const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  studentId: yup.string().required().min(8).max(8),
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    await loginSchema.validate(req.body);

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    delete user.password;
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({ user, accessToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Forget password route
router.patch("/forgetpassword", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Validate request body
    await forgetPasswordSchema.validate(req.body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }
    if (await bcrypt.compare(newPassword, user.password)) {
      return res
        .status(409)
        .json({ error: "New password cannot be the same as the old password" });
    }
    const forgetPassword = await prisma.user.update({
      where: { email },
      data: {
        password: await bcrypt.hash(newPassword, 10),
      },
    });
    res.status(200).json({ forgetPassword });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, studentId } = req.body;

    // Validate request body
    await registerSchema.validate(req.body);

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email: email }, { studentId: studentId }] },
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "Email or Student ID already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        studentId,
      },
    });
    delete user.password;
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ user, accessToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
