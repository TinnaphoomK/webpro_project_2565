import express from "express";
import { PrismaClient } from "@prisma/client";
import * as yup from "yup";

const prisma = new PrismaClient();
const router = express.Router();

// Validation schema for the reservation POST route
const StatusEnum = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
};

const createReservationSchema = yup.object().shape({
  userId: yup.number().required(),
  roomId: yup.number().required(),
  dateTimeStart: yup.date().required(),
  dateTimeEnd: yup.date().required(),
  detail: yup.string(),
});

// Validation schema for the reservation PUT route
const updateReservationSchema = yup.object().shape({
  status: yup.string().oneOf(Object.values(StatusEnum)),
});

router.get("/", async (req, res) => {
  try {
    const reservation = await prisma.reservation.findMany({
      include: {
        Room: true,
        User: true,
      },
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/admin", async (req, res) => {
  const { status } = req.query;
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        status: status,
      },
      include: {
        Room: true,
        User: true,
      },
    });
    res.status(200).json(reservations);
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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await updateReservationSchema.validate({ status });

    const reservation = await prisma.reservation.update({
      where: {
        id: parseInt(id),
      },
      data: {
        status: status,
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
    await createReservationSchema.validate({
      userId,
      roomId,
      dateTimeStart,
      dateTimeEnd,
      detail,
    });

    // Check for overlapping reservations
    const overlappingReservations = await prisma.reservation.findMany({
      where: {
        roomId: roomId,
        dateTimeStart: {
          lte: new Date(dateTimeEnd),
        },
        dateTimeEnd: {
          gte: new Date(dateTimeStart),
        },
      },
    });

    // If there are overlapping reservations, return an error
    if (overlappingReservations.length > 0) {
      return res
        .status(400)
        .json({ error: "Can't make a reserve betwwen others." });
    }

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
