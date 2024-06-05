import  express from "express";
import EmployeeController from "../controllers/EmployeeController";
import verifyToken from "../../../middleware/authMiddleware";
const router = express.Router();
router.get('/employee',verifyToken,EmployeeController.getAllEmployee)
router.get('/employee/:id',verifyToken,EmployeeController.getEmployee)
router.post('/employee',verifyToken,EmployeeController.createEmployee)
router.put('/employee/:id',verifyToken,EmployeeController.updateEmployee)
router.delete('/employee/:id',verifyToken,EmployeeController.deleteEmployee)

export default router