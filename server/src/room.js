import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const room = await prisma.room.findMany();
        res.status(200).json(room);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
});

router.get("/:id", async (req,res) => {
    try{
       const {id} = req.params;
       const room = await prisma.room.findUnique({
           where:{
               id : parseInt(id),
           }
       })
       res.status(200).json(room)
    }catch (error){
        res.status(400).json({ error: error.message});
    }
});

//create
router.post('/', async (req,res) => {
    try{
        const {name, detail} = req.body;
        const room = await prisma.room.create({
            data:{
                name: name,
                detail : detail
            },
        });
        res.status(200).json({room})
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})

//update
router.patch('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const{ name, detail} = req.body;
        const room = await prisma.room.update({
            where:{
                id: parseInt(id),
            },
            data:{
                name:name ? name : undefined,
                detail: detail ? detail : undefined,
            },
        });
        res.status(200).json(room);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})

//delete
router.delete('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const room = await prisma.room.delete({
            where:{
                id: parseInt(id),
            },
        })
        res.status(200).json(room);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})
export default router;