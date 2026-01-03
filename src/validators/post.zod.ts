import {z as zod} from 'zod';

export const createPostSchema = zod.object({
    title: zod.string().trim().min(1, 'Title is required'),
    content: zod.string().trim().min(1, 'Content is required'),
});




