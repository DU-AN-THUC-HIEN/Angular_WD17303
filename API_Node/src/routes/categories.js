import express from "express";
import { getAll, get, create, remove, update } from "../controller/category";
import { checkPermission } from "../middlewares/checkPermission";

const routerCategory = express.Router();

routerCategory.get("/categories", getAll);
routerCategory.get("/categories/:id", get);
routerCategory.post("/categories", create);
routerCategory.delete("/categories/:id", remove);
routerCategory.patch("/categories/:id", update);

export default routerCategory;