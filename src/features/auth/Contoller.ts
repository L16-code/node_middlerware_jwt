import express from 'express';
import UserService from "./Services"
export const userRegister = async (request: express.Request, response: express.Response) => {
    try {
        const { username, email, password } = request.body;
        const result =await UserService.userRegister(username, email, password)
        response.status(201).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
};
export const userLogin = async (request: express.Request, response: express.Response) => {
    try {
        const { email, password } = request.body;
        const result = await UserService.userLogin(email, password)
        response.status(200).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}