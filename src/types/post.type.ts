export interface Post  {
    id: number;
    title:string;
    content:string;
}

export interface createPostDTO {
    title: string;
    content: string;
}

export interface updatePostDTO {
    title?: string;
    content?: string;
}

export interface PostResponseDTO {
    id: number;
    title: string;
}
