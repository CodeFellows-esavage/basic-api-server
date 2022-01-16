'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing err404 error-handler for bad route and bad method', () => {
  it('should throw 404 on bad route', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toEqual(404);
  });

  it('should throw 404 on bad method', async () => {
    const response = await request.patch('/cat');
    expect(response.status).toEqual(404);
  });
});
