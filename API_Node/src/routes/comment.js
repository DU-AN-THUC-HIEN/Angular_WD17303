import express from "express";
import { checkPermission } from "../middlewares/checkPermission";
import { create, getCommentFromProduct, getOneComment, removeComment, updateComment } from "../controller/comment";

const routerComment = express.Router();

routerComment.get("/comment/:productId", getCommentFromProduct)
routerComment.get("/comment/:id", getOneComment)
routerComment.post("/comment", create)
routerComment.put("/comment/:id", updateComment, checkPermission)
routerComment.delete("/comment/:id", removeComment)

export default routerComment;