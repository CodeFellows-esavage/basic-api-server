'use strict';

const { app } = require('../lib/server');
const { db } = require('../lib/models');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});
//TODO add tests
describe('Testing the cat router', () => {
  it('should read from messages data', async () => {
    const response = await request.post('/cat').send({
      name: 'Chloe',
      breed: 'tabby',
      age: '11',
      color: 'orange',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Chloe');
  });
});