import express from "express";
import verifyToken from "../middleware/authMiddleware";
import UserController from "../controllers/UserController";

const router = express.Router();

router.post('/register', UserController.userRegister);
router.post('/login', UserController.userLogin); // No verifyToken middleware here

// Example of a protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

export default router;
