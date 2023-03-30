import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();


router.get('/user', async (req,res) => {
    try{
        const user = await prisma.user.findMany();
        res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({ error: error.message});
    }
});



router.post('/login', async (req,res) => {
    try{
        const { email, password } = req.body;
        const findEmail = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })
        if (!findEmail){ throw new Error("Email not found")};
        if (findEmail.password != password){
            throw new Error ("Password is incorrect")
        }
        res.status(200).json(findEmail());
    } catch (error){
        res.status(400).json({ error: error.message});
    }
});

router.post('/register', async (req,res) =>{
    try{
        const {email, password, firstName, lastName, studentId } = req.body;
        const findEmail = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })
        if (findEmail){ throw new Error("Email already exist");}
        const user = await prisma.user.create({
            data:{
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                studentId: studentId,
            },
        });
        res.status(200).json(user);
    }catch (error){
        console.log(error)
        res.status(400).json({ error: error.message});
    }
});


export default router