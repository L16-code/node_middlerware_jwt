import employeeServices from "./employeeServices";
import express from 'express';

export const createEmployee = async (request: express.Request, response: express.Response) => {
    try {
        const { name, email, mobile, dob, doj } = request.body;
        const result = await employeeServices.createEmployee(name, email, mobile, dob, doj)
        response.status(201).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}

export const getAllEmployees = async (request: express.Request, response: express.Response) => {
    try {
        const result = await employeeServices.getAllEmployees()
        response.status(200).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}

export const getEmployee = async (request: express.Request, response: express.Response) => {
    try {
        const { id } = request.params;
        const result = await employeeServices.getEmployee(id)
        response.status(200).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}

export const updateEmployee = async (request: express.Request, response: express.Response) => {
    try {
        const { id } = request.params;
        const { name, email, mobile, dob, doj } = request.body;
        const result = await employeeServices.updateEmployee(id, name, email, mobile, dob, doj)
        response.status(200).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}

export const deleteEmployee = async (request: express.Request, response: express.Response) => {
    try {
        const { id } = request.params;
        const result = await employeeServices.deleteEmployee(id)
        response.status(200).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}