import express from 'express';

import postsRoutes from './routes/posts.routes.js';
import { connectDB } from './db.js';

const app = express()

connectDB( )
app.use(postsRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
