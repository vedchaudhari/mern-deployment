import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

connectDB();

app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello Automation my World!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});