import {z as zod} from 'zod';

export const createPostSchema = zod.object({
    title: zod.string().trim().min(1, 'Title is required'),
    content: zod.string().trim().min(1, 'Content is required'),
});

export const postIdParamSchema = zod.object({
    id: zod.coerce.number().int().positive(),
});

export const updatePostSchema = zod
    .object({
        title: zod.string().trim().min(1, 'Title is required').optional(),
        content: zod.string().trim().min(1, 'Content is required').optional(),
    })
    .refine((data) => data.title !== undefined || data.content !== undefined, {
        message: 'No update fields provided',
    });


