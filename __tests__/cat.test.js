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

describe('Testing the cat router', () => {
  it('should create a record using POST', async () => {
    const response = await request.post('/cat').send({
      name: 'Chloe',
      breed: 'Tabby',
      age: '11',
      color: 'Orange',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Chloe');
  });

  it('should read a list of records using GET', async () => {
    await request.post('/cat').send({
      name: 'Poncho',
      breed: 'Tabby',
      age: '11',
      color: 'Black and Brown',
    });

    const response = await request.get('/cat');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

  it('should read a record using GET', async () => {
    const response = await request.get('/cat/2');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Poncho');
  });

  it('Update a record using PUT', async () => {
    const response = await request.put('/cat/1').send({
      name: 'Chloe',
      breed: 'Tabby',
      age: '11.5',
      color: 'Orange',
    });

    expect(response.status).toEqual(202);
    expect(response.body.age).toEqual(11.5);
  });

  it('should destroy a record using DELETE', async () => {
    const response = await request.delete('/cat/2');

    expect(response.status).toEqual(204);
    expect(response.header.data).toEqual(undefined);
  });
});

