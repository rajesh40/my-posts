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
 *   post:
 *     summary: Create a post
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       400:
 *         description: Invalid request body
 */
router.get('/', getAllPostsHandler);
/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Post found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       400:
 *         description: Invalid post ID
 *       404:
 *         description: Post not found
 *   put:
 *     summary: Update a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             minProperties: 1
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       400:
 *         description: Invalid post ID or empty update
 *       404:
 *         description: Post not found
 *   delete:
 *     summary: Delete a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Post deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid post ID
 *       404:
 *         description: Post not found
 */
router.get('/:id', validateParams(postIdParamSchema), getPostByIdHandler);
router.post('/', validateBody(createPostSchema), createPostHandler);
router.put('/:id', validateParams(postIdParamSchema), validateBody(updatePostSchema), updatePostHandler);
router.delete('/:id', validateParams(postIdParamSchema), deletePostHandler); 

export default router;
