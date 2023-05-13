import express from "express";
import { PrismaClient } from "@prisma/client";
import authenticateToken from "../middleware/auth.js";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const room = await prisma.room.findMany();
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const room = await prisma.room.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        Reservation: true,
      },
    });
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//create
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { name, detail, floor} = req.body;
    const room = await prisma.room.create({
      data: {
        name: name,
        detail: detail,
        floor: floor,
        description: description,
        totalSeat: totalSeat,
        image: image,
      },
    });
    res.status(200).json({ room });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update
router.patch("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, detail } = req.body;
    const room = await prisma.room.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name ? name : undefined,
        detail: detail ? detail : undefined,
        floor: floor ? floor : undefined,
        description: description ? description : undefined,
        totalSeat: totalSeat ? totalSeat : undefined,
        image: image ? image : undefined,
      },
    });
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//delete
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const room = await prisma.room.delete({
      where: {
        id: parseInt(id),
      },
    });
    
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
export default router;
