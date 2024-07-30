import express from "express";
import { PORT } from "./config.js";
import postsRoutes from "./routes/posts.routes.js";
import { connectDB } from "./db.js";

const app = express();
connectDB();
app.use(postsRoutes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
