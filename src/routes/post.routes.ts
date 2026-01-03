import {Router} from "express";
import { createPostHandler,getAllPostsHandler,getPostByIdHandler,updatePostHandler, deletePostHandler } from "../controllers/post.controller.js";
import { validateBody, validateParams } from "../middlewares/validate.middleware.js";
import { createPostSchema, postIdParamSchema, updatePostSchema } from "../validators/post.zod.js";

const router = Router();

/**
 * @openapi
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 */
router.get('/', getAllPostsHandler);
router.get('/:id', validateParams(postIdParamSchema), getPostByIdHandler);
router.post('/', validateBody(createPostSchema), createPostHandler);
router.put('/:id', validateParams(postIdParamSchema), validateBody(updatePostSchema), updatePostHandler);
router.delete('/:id', validateParams(postIdParamSchema), deletePostHandler); 

export default router;
