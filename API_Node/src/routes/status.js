import express from 'express'
import { getStatusById,getAllStatuses} from '../controller/status'

const routerStatus = express.Router()
routerStatus.get('/status', getAllStatuses)
routerStatus.get('/status/:id', getStatusById)


export default routerStatus
