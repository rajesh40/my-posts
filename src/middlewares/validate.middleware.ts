import type { RequestHandler } from 'express';
import type { ZodType } from 'zod';
import AppError from '../errors/AppError.js';

export const validateBody = (schema: ZodType): RequestHandler => {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const message = result.error.issues
                .map((issue) => {
                    const path = issue.path.join('.');
                    return path ? `${path}: ${issue.message}` : issue.message;
                })
                .join(', ');
            return next(new AppError(message || 'Invalid request body', 400));
        }

        req.body = result.data;
        return next();
    };
};

export const validateParams = (schema: ZodType): RequestHandler => {
    return (req, _res, next) => {
        const result = schema.safeParse(req.params);
        if (!result.success) {
            const message = result.error.issues
                .map((issue) => {
                    const path = issue.path.join('.');
                    return path ? `${path}: ${issue.message}` : issue.message;
                })
                .join(', ');
            return next(new AppError(message || 'Invalid request params', 400));
        }

        return next();
    };
};
