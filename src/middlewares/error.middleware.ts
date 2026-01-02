import { type Request, type Response, type NextFunction } from 'express';
import AppError from '../errors/AppError.js';

export const globalErrorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {    
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    console.error("UNEXPECTED ERROR:", err);

    return res.status(500).json({
        message: "Internal Server Error"
    });
}