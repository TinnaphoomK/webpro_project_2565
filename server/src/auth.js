import express from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import bcrypt from "bcrypt";
import { defineStore } from "pinia";

const prisma = new PrismaClient();
const router = express.Router();

// Define Pinia store for authentication
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("/login", { email, password });
        const { user, token } = response.data;
        this.user = user;
        this.token = token;
        return user;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async register(email, password, firstName, lastName, studentId) {
      try {
        const response = await axios.post("/register", {
          email,
          password,
          firstName,
          lastName,
          studentId,
        });
        const { user, token } = response.data;
        this.user = user;
        this.token = token;
        return user;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});

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
    const token = "fake_token"; // Replace with real token generation
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, studentId } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
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
    const token = "fake_token"; // Replace with real token generation
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
