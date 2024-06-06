import express from "express";
import { userLogin, userRegister } from "./Contoller";
import HandleErrors from "../../middleware/hndleErrors";
import { validateRequest } from "../../middleware/validations";
import { loginSchema, userSchema } from "./Validations";

const router = express.Router();

router.post('/register',validateRequest(loginSchema), HandleErrors(userRegister));
router.post('/login',validateRequest(userSchema), HandleErrors(userLogin)); 


export default router;
