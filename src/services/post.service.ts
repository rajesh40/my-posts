import type { createPostDTO, Post, updatePostDTO, PostResponseDTO } from "../types/post.type.js";


const posts: Post[] = [];

export const createPost = async(data: createPostDTO): Promise<PostResponseDTO> => {
    const newPost:Post = {
        id: posts.length + 1,
        title: data.title,
        content:data.content
    };
    posts.push(newPost);
    return newPost;
}

export const getAllPosts = async() :Promise<PostResponseDTO[]> => {
    return posts.map((post) => ({id: post.id, title: post.title}));
}

export const getPostById = async(id: number): Promise<Post | null> => {
    const post = posts.find((post) => post.id === id);
    return post ?? null;
}

export const updatePost = async(id: number, data:updatePostDTO): Promise<Post | null> => {
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return null;
    }
    post.title = data.title ?? post.title;
    post.content = data.content ?? post.content;
    return post;    
}

export const deletePost = async(id: number): Promise<boolean> => {
    const postIndex = posts.findIndex((post) => post.id === id);
    if(postIndex === -1) {
        return false;
    }
    posts.splice(postIndex, 1);
    return true;
}   