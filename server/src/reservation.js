import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reservation = await prisma.reservation.findMany();
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, roomId, dateTimeStart, dateTimeEnd, detail } = req.body;
    console.log(userId, roomId, dateTimeStart, dateTimeEnd, detail);
    const reservation = await prisma.reservation.create({
      data: {
        userId: userId,
        roomId: roomId,
        dateTimeStart: dateTimeStart,
        dateTimeEnd: dateTimeEnd,
        detail: detail || "",
      },
    });
    res.status(200).json({ reservation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
