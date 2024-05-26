const request = require('supertest');
const express = require('express');
const routes = require('../src/routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('GET /api/data', () => {
  it('should return an array of data', async () => {
    const res = await request(app).get('/api/data');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(3);
    expect(res.body[0]).toHaveProperty('name');
  });
});
