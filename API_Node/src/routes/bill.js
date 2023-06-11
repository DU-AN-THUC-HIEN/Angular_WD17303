import { create, get, getAll, getByIdUser, update } from '../controller/bill'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const routerBill = express.Router();
routerBill.route("/bill").get(getAll).post(create)
routerBill.route("/bill/:id").get(get).patch(update)
routerBill.get("/bill/user/:userId",getByIdUser)

export default routerBill;