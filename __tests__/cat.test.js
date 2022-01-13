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
// describe('Testing the cat router', () => {
//   it('should read from messages data', async () => {
//     const response = await request.get('/message');

//     expect(response.status).toEqual(200);
//     expect(response.body.count).toBeDefined();
//     expect(response.body.results).toBeDefined();
//   });