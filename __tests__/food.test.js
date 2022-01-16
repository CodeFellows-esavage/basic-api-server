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

describe('Testing the food router', () => {
  it('should create a record using POST', async () => {
    const response = await request.post('/food').send({
      name: 'Carrot',
      category: 'Vegetable',
      healthy: 'true',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Carrot');
  });


  it('should read a list of records using GET', async () => {
    await request.post('/food').send({
      name: 'Cookie',
      category: 'Dessert',
      healthy: 'false',
    });

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

  it('should read a record using GET', async () => {
    const response = await request.get('/food/2');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Cookie');
  });

  it('Update a record using PUT', async () => {
    const response = await request.put('/food/2').send({
      name: 'Oatmeal Cookie',
      category: 'Dessert',
      healthy: 'true',
    });

    expect(response.status).toEqual(202);
    expect(response.body.healthy).toEqual(true);
  });

  it('should destroy a record using DELETE', async () => {
    const response = await request.delete('/food/2');

    expect(response.status).toEqual(204);
    expect(response.header.data).toEqual(undefined);
  });
});