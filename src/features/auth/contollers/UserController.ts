import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../model/UserModel';

class UserController {
    userRegister = async (request: express.Request, response: express.Response) => {
        try {
            const { username, email, password } = request.body;
            const hashedPassword = await bcrypt.hash(password, 8);
            console.log(`Hashed Password: ${hashedPassword}`); 
            const user = new UserModel({
                username,
                email,
                password: hashedPassword
            });
            await user.save();
            console.log(`User Saved: ${user}`); 
            return response.status(201).json({ message: 'User created', data: user });
        } catch (error) {
            console.error(error); 
            return response.status(400).json({ error: 'User registration failed' });
        }
    };

    userLogin = async (request: express.Request, response: express.Response) => {
        try {
            const { username, password } = request.body;
            const user = await UserModel.findOne({ username });
            if (!user) {
                return response.status(401).json({ error: 'Authentication failed: User not found' });
            }
            // console.log(`Stored Hashed Password: ${user.password}`); 
            // console.log(await bcrypt.compare(password,user.password));
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return response.status(401).json({ error: 'Authentication failed: Incorrect password ' });
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || '1606', {
                expiresIn: '1h',
            });
            return response.status(200).json({ token });
        } catch (error) {
            console.error(error); 
            return response.status(500).json({ error: 'Login failed' });
        }
    };
}

export default new UserController();