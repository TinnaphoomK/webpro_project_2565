import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createPinia } from 'pinia';
import auth from "./auth.js";
import room from "./room.js";
import report from "./report.js";
import reservation from "./reservation.js";

const router = express.Router();
const port = 3000;
const app = express();
const pinia = createPinia();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(pinia.middleware);

app.use('/api',
    router.use("/auth", auth(pinia)),
    router.use('/room', room),
    router.use('/report', report),
    router.use('/reservation', reservation));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
