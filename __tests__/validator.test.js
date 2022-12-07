'use strict';
const app = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { Food, db } = require('../src/models');

beforeAll(async () => {
  await db.sync();
});

describe('Testing the 404 error handling', () => {
  test('Should respond with a 404 for incorrect method', async () => {
    const response = await request.post('/incorrectMethod');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 404 for incorrect route', async () => {
    const response = await request.get('/incorrectRoute');
    expect(response.status).toEqual(404);
  });
});

describe('Testing POST routes', () => {
  test('Should create a single food item', async () => {
    const response = await request.post('/food').send({
      foodName: 'foodTest1',
    });
    expect(response.status).toEqual(200);
    expect(response.body.foodName).toEqual('foodTest1');
  });
  test('Should create a single clothes item', async () => {
    const response2 = await request.post('/clothes').send({
      clothesName: 'clothesTest1',
    });
    expect(response2.status).toEqual(200);
    expect(response2.body.clothesName).toEqual('clothesTest1');
  });
});

describe('Testing GET routes', () => {
  test('Should read all food items', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });
  test('Should read all clothes items', async () => {
    const response2 = await request.get('/clothes');
    expect(response2.status).toEqual(200);
    expect(Array.isArray(response2.body)).toEqual(true);
  });
  test('Should read a single food item', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.foodName).toEqual('foodTest1');
  });
  test('Should read a single clothes item', async () => {
    const response2 = await request.get('/clothes/1');
    expect(response2.status).toEqual(200);
    expect(response2.body.clothesName).toEqual('clothesTest1');
  });
});


describe('Testing PUT routes', () => {
  test('Should update a single food item', async () => {
    await request.put('/food/1').send({
      foodName: 'foodTest1Updated',
    });
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.foodName).toEqual('foodTest1Updated');
  });
  test('Should update a single clothes item', async () => {
    await request.put('/clothes/1').send({
      clothesName: 'clothesTest1Updated',
    });
    const response2 = await request.get('/clothes/1');
    expect(response2.status).toEqual(200);
    expect(response2.body.id).toEqual(1);
    expect(response2.body.clothesName).toEqual('clothesTest1Updated');
  });
});

describe('Testing DELETE routes', () => {
  test('Should delete a single food item', async () => {
    await request.delete(`/food/1`);
    const foodRecord = await Food.findOne({ where: { id: 1 } });
    expect(foodRecord).not.toBeTruthy();
  });
  test('Should delete a single clothes item', async () => {
    await request.delete(`/clothes/1`);
    const foodRecord2 = await Food.findOne({ where: { id: 1 } });
    expect(foodRecord2).not.toBeTruthy();
  });
});

