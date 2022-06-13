'use strict';

/* global afterAll, describe, test, expect */

const app = require('../../src/js/index');
const request = require('supertest');

afterAll(() => {
  app.close();
});

describe('POST /api/report/add', () => {
  test('adds report to table if id is new', async () => {
    const response = await request(app)
      .post('/api/report/add')
      .send({
        id: 10,
        name: 'Test movie',
        description: 'This test should not fail',
        DataStream_id: 1
      });

    expect(response.headers['Content-Type'])
      .toEqual(expect.stringContaining('json'));
    
    expect(response.statusCode).toEqual(200);
  });

  test('does not add report to table if id exists', async () => {
    const response = await request(app)
      .post('/api/report/add')
      .send({
        id: 9,
        name: 'Another test movie',
        description: 'This test should fail',
        DataStream_id: 1
      });
    
    expect(response.statusCode).toEqual(400);
  });
});

describe('GET /api/report/all', () => {
  test('returns list of all the reports', async () => {
    const response = await request(app)
      .get('/api/report/all');
    
    expect(response.headers['Content-Type'])
      .toEqual(expect.stringContaining('json'));
    
    expect(response.statusCode).toEqual(200);
  });
});

describe('GET /api/report/:id', () => {
  test('returns report if ID exists', async () => {
    const response = await request(app)
      .get('/api/report/1');
    
    expect(response.headers['Content-Type'])
      .toEqual(expect.stringContaining('json'));
    
    expect(response.statusCode).toEqual(200);
  });

  test('returns report if ID does not exist', async () => {
    const response = await request(app)
      .get('/api/report/11');
    
    expect(response.statusCode).toEqual(404);
  });
});

describe('PUT /api/report/update', () => {
  test('updates report if id exists', async () => {
    const response = await request(app)
      .put('/api/report/update')
      .send({
        id: 2,
        name: 'Updated movie',
        description: 'The same movie but new one'
      });

    expect(response.headers['Content-Type'])
      .toEqual(expect.stringContaining('json'));
    
    expect(response.statusCode).toEqual(200);
  });

  test('does not update report if id does not exist', async () => {
    const response = await request(app)
      .put('/api/report/update')
      .send({
        id: 69,
        name: 'Nice movie',
        description: 'Great movie but it does not exist'
      });
    
    expect(response.statusCode).toEqual(400);
  });

  test('does not update report if properties are not changed', async () => {
    const response = await request(app)
      .put('/api/report/update')
      .send({
        id: 4
      });
    
    expect(response.statusCode).toEqual(400);
  });
});

describe('DELETE /api/report/:id', () => {
  test('removes report if ID exists', async () => {
    const response = await request(app)
      .get('/api/report/5');
    
    expect(response.headers['Content-Type'])
      .toEqual(expect.stringContaining('json'));
    
    expect(response.statusCode).toEqual(200);
  });
});
