import { Router  } from "express";
import { getPosts, createPost , updatePost, deletePost } from "../controllers/posts.controller.js";



 const router = Router();

router.get('/posts', getPosts )

router.post('/posts', createPost)

router.put('/posts/:id', updatePost )

router.delete('/posts/:id', deletePost) 

router.get('/posts/:id', )





 export default router
