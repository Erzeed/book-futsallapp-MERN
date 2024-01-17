import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/user-routes";
import authRoute from "./routes/auth-routes";
import cookieParser from "cookie-parser";

mongoose
  .connect(process.env.CONNECTDBFUTSALL as string)
  .then(() => {
    console.log('MongoDB Connection Succeeded.');
  })
  .catch((err) => {
    console.log('Error in DB connection: ' + err);
  });

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: process.env.ACCES_POINT,
  credentials: true,
}));

app.get('/api/test', async (req: Request, res: Response ) => {
    res.status(200).json({ message: "hello" })
});

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(7000, () => {
    console.log("server running")
})