import express from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
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
    res.status(500).json({ error: error.message });
  }
});

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, studentId } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email: email }, { studentId: studentId }] },
    });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use or Student id already in use" });
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
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
