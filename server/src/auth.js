import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as yup from "yup";

const prisma = new PrismaClient();
const router = express.Router();

// Define Yup validation schemas
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long!').max(20, 'Password is too long!'),
});

const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  newPassword: yup.string().required('New Password is required').min(8, 'New Password must be at least 8 characters long!').max(20, 'New Password is too long!'),
});

const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid email!').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters long!').max(20, 'Password is too long!').required('Password is required!'),
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  studentId: yup.string().required('Student ID is required!').length(8, 'Student ID must be 8 characters long!'),
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

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    delete user.password;
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

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return res.status(409).json({ error: "New password cannot be the same as the old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const forgetPassword = await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
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
      return res.status(409).json({ error: "Email or Student ID already in use" });
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
    res.status(200).json({ user, accessToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
