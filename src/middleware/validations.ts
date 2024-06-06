// import { NextFunction } from "express";
import { ObjectSchema } from "joi";
// import  express  from "express";
import express, { Request, Response, NextFunction } from 'express';
// import { ObjectSchema } from 'joi';

export const validateRequest = (schema: ObjectSchema, property: 'body' | 'params' | 'query' = 'body') => {
    return (request: Request, response: Response, next: NextFunction) => {
        const { error } = schema.validate(request[property], { abortEarly: false });
        if (error) {
            return response.status(400).json({ message: error.details.map(err => err.message).join(', ') });
        }
        next();
    };
};
