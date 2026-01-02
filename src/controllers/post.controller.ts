import { type Request, type Response, type NextFunction } from "express";
import type { createPostDTO, PostResponseDTO, updatePostDTO } from "../types/post.type.js";
import * as postService from "../services/post.service.js";
import AppError from "../errors/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

interface UpdatePostRequest extends Request {
  body: updatePostDTO;
}

export const createPostHandler = asyncHandler(
    async (req: Request<{}, {}, createPostDTO>, res: Response) => {
        const { title, content } = req.body;
        const newPost = await postService.createPost({ title, content });
        res.status(201).send(newPost);
    }
);

export const getAllPostsHandler = asyncHandler(
    async (req, res) => {
        const posts: PostResponseDTO[] = await postService.getAllPosts();
        res.status(200).json(posts);
    }
);  

export const getPostByIdHandler = asyncHandler(
    async (req, res) => {
        const postId = Number(req.params.id);
        if(isNaN(postId)) {        
            throw new AppError("Invalid post ID", 400);
        }
        const post = await postService.getPostById(postId);
        if(!post) {
            throw new AppError("Post not found", 404);
        }
        return res.status(200).json(post);
    }   
);

export const updatePostHandler = asyncHandler(
    async(req, res) => {
        const postId = Number(req.params.id);
        if(isNaN(postId)) {
            throw new AppError("Invalid post ID", 400);
        } 

        const {title, content} = req.body as updatePostDTO;
        if(title === undefined && content === undefined) {
            throw new AppError("No update fields provided", 400);
        }

        const updateData: updatePostDTO = {};
        if(title !== undefined) {
            updateData.title = title;
        }
        if(content !== undefined) {
            updateData.content = content;
        }

        const updatedPost = await postService.updatePost(postId, updateData);
        if(!updatedPost) {
            throw new AppError("Post not found", 404);    
        }

        return res.status(200).json(updatedPost);
    }     
);

export const deletePostHandler = asyncHandler(
    async (req, res) => {
        const postId = Number(req.params.id);
        if(isNaN(postId)) {
            throw new AppError("Invalid post ID", 400);
        }

        const deleted = await postService.deletePost(postId);
        if(!deleted) {
            throw new AppError("Post not found", 404);
        }

        return res.status(200).json({message: "Post deleted"});
    }
);