import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const report = await prisma.report.findMany();
        res.status(200).json(report);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
});

router.get("/:id", async (req,res) => {
    try{
       const {id} = req.params;
       const report = await prisma.report.findUnique({
           where:{
               id : parseInt(id),
           }
       })
       res.status(200).json(report)
    }catch (error){
        res.status(400).json({ error: error.message});
    }
});

router.post('/', async (req,res) => {
    try{
        const {userId, roomId, detail} = req.body;
        const report = await prisma.report.create({
            data:{
                userId : userId,
                roomId : roomId,
                detail : detail

            },
        });
        res.status(200).json({report})
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})

//update
router.patch('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const{ detail} = req.body;
        const report = await prisma.report.update({
            where:{
                id: parseInt(id),
            },
            data:{
                detail: detail ? detail : undefined,
            },
        });
        res.status(200).json(report);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})

//delete
router.delete('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const report = await prisma.report.delete({
            where:{
                id: parseInt(id),
            },
        })
        res.status(200).json(report);
    }catch (error){
        res.status(400).json({ error: error.message});
    }
})

export default router;