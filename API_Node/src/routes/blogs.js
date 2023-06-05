import express from "express";
import { getAll, get, create, remove, update } from "../controller/blog";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();
router.get("/blogs", getAll);
router.get("/blogs/:id", get);
router.post("/blogs", checkPermission, create);
router.delete("/blogs/:id", checkPermission, remove);
router.patch("/blogs/:id", checkPermission, update);
export default router;
