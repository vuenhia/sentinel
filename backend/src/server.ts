import express, { type Express } from "express";
import cors from "cors";
import endpointsRouter from "../routes/routes";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/endpoints", endpointsRouter);

app.listen(3000, () => console.log("Listening on 3000"));
