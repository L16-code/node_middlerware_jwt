import  express from "express";
import verifyToken from "../../middleware/authMiddleware";
import { validateRequest } from "../../middleware/validations";
import { employeeIdSchema, employeeSchema, employeeUpdateSchema } from "./employeeValidations";
import HandleErrors from "../../middleware/hndleErrors";
import { createEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee } from "./employeecontroller";
const router = express.Router();

router.get('/employee',verifyToken,HandleErrors(getAllEmployees))
router.post('/employee',verifyToken,validateRequest(employeeSchema), HandleErrors(createEmployee))
router.get('/employee/:id',verifyToken,validateRequest(employeeIdSchema,'params'),HandleErrors(getEmployee))
router.put('/employee/:id',verifyToken,validateRequest(employeeUpdateSchema),validateRequest(employeeIdSchema ,'params') ,HandleErrors(updateEmployee))
router.delete('/employee/:id',verifyToken,validateRequest(employeeIdSchema,'params'),HandleErrors(deleteEmployee))

export default router