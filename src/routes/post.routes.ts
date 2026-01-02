import {Router, type Request, type Response, type NextFunction} from "express";
import { createPostHandler,getAllPostsHandler,getPostByIdHandler,updatePostHandler, deletePostHandler } from "../controllers/post.controller.js";

const router = Router();

router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);
router.post('/', createPostHandler);
router.put('/:id', updatePostHandler);
router.delete('/:id', deletePostHandler); 

export default router;