import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import 'dotenv/config';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());//allows to parse incoming requests
app.use(cookieParser());//allows us to parse incoming cookies

app.use(cors({ origin:"http://localhost:5173" , credentials : true }));

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist"))); // serve static files

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); // return the frontend's index.html for all routes
  });
}


app.listen(PORT , () => {
  connectDB();
  console.log("Server is running on port :" ,PORT);
});