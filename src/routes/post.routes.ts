import {Router} from "express";
import { createPostHandler,getAllPostsHandler,getPostByIdHandler,updatePostHandler, deletePostHandler } from "../controllers/post.controller.js";
import { validateBody, validateParams } from "../middlewares/validate.middleware.js";
import { createPostSchema, postIdParamSchema } from "../validators/post.zod.js";

const router = Router();

router.get('/', getAllPostsHandler);
router.get('/:id', validateParams(postIdParamSchema), getPostByIdHandler);
router.post('/', validateBody(createPostSchema), createPostHandler);
router.put('/:id', updatePostHandler);
router.delete('/:id', deletePostHandler); 

export default router;
