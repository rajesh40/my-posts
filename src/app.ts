import express from 'express';
import postRouter from './routes/post.routes.js';
import { globalErrorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/posts', postRouter);

// ❗ MUST be last middleware   
app.use(globalErrorHandler)

export default app;