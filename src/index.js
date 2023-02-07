import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  // This check makes sure this is a JSON parsing issue, but it might be
  // coming from any middleware, not just body-parser:

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res
      .status(400)
      .json({ status: false, error: "Enter valid json body" }); // Bad request
  }

  next();
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    console.log(req)
    const {username, password} = req.body
    const user = await prisma.user.create({
      data: {
        username: username,
        email: password,
      },
    });

    console.log(user);
    res.json(user)
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
