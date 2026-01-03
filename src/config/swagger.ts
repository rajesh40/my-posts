import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Post API',
      version: '1.0.0',
      description: 'API documentation for Blog Post service'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['src/routes/*.ts'] // 👈 important
});
