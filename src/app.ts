import express from 'express';
import postRouter from './routes/post.routes.js';
import { globalErrorHandler } from './middlewares/error.middleware.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/posts', postRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ❗ MUST be last middleware   
app.use(globalErrorHandler)

export default app;