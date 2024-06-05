import  express from "express";
import EmployeeController from "../controllers/EmployeeController";
import verifyToken from "../middleware/authMiddleware";
const router = express.Router();
router.get('/employee',verifyToken,EmployeeController.getAllEmployee)
router.get('/employee/:id',EmployeeController.getEmployee)
router.post('/employee',EmployeeController.createEmployee)
router.put('/employee/:id',EmployeeController.updateEmployee)
router.delete('/employee/:id',EmployeeController.deleteEmployee)

export default router