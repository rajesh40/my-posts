import request from 'supertest';
import app from '../app.js';

describe('Posts API', () => {

  it('GET /posts should return empty array initially', async () => {
    const res = await request(app).get('/posts');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

});
