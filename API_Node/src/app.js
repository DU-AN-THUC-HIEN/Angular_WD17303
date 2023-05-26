import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/products";
import routerUser from "./routes/users";
import routerCategory from "./routes/categories";
import uploadRouter from "./routes/upload";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api", routerUser);
app.use("/api", routerCategory);
app.use("/api", uploadRouter);

mongoose.connect("mongodb://127.0.0.1:27017/Angular_WD17303");

export const viteNodeApp = app;