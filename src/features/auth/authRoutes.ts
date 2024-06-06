import express from "express";
import verifyToken from "../../middleware/authMiddleware";
import UserController from "./UserController";

const router = express.Router();

router.post('/register', UserController.userRegister);
router.post('/login', UserController.userLogin); 


export default router;
