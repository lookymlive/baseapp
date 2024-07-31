import express from "express";
import postsRoutes from "./routes/posts.routes.js";

const app = express();

//Middlewares
app.use(express.json());

//Esto es una ruta
app.use(postsRoutes);


export default app

