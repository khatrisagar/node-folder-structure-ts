import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 9999;
import cors from "cors";
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Listening on the PORT => ${PORT}`);
});
