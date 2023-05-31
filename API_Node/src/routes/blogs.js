import express from "express";
import { getAll, get, create, remove, update } from "../controller/blog";

const router = express.Router();
router.get("/blogs", getAll);
router.get("/blogs/:id", get);
router.post("/blogs", create);
router.delete("/blogs/:id", remove);
router.patch("/blogs/:id", update);
export default router;
