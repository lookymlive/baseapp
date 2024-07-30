import { Router  } from "express";
import { getPosts, createPost , updatePost, deletePost } from "../controllers/posts.controller.js";



 const router = Router();

router.get('/posts', getPosts )

router.post('/posts', createPost)

router.put('/posts', updatePost )

router.delete('/posts', deletePost) 

router.get('/posts/:id', )





 export default router
