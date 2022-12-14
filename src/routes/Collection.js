const express = require('express');
const Collection = require('./collection.js');
const clothesModel = require('../models/clothes.js');
const foodModel = require('../models/food.js');

const router = express.Router();
const Clothes = new Collection(clothesModel);
const Food = new Collection(foodModel);

router.get('/food', async (request, response, next) => {
  let foodRecords = await Food.findAll();
  response.status(200);
  response.send(foodRecords);
});

router.get('/food', async (request, response, next) => {
  let foodRecord = await Food.findOne({ where: { id: request.params.id } });
  response.status(200);
  response.send(foodRecord);
});

router.post('/food', async (request, response, next) => {
  let foodRecord = await Food.create(request.body);
  response.status(200);
  response.send(foodRecord);
});

router.put('/food', async (request, response, next) => {
  let foodRecord = await Food.update(request.body, { where: { id: request.params.id } });
  response.status(200);
  response.send(foodRecord);
});

router.delete('/food', async (request, response, next) => {
  await Food.destroy({ where: { id: request.params.id } });
  response.status(200);
  response.send(`Id ${request.params.id} deleted`);
});

router.get('/clothes', async (request, response, next) => {
  let clothesRecord = await Clothes.findAll();
  response.status(200);
  response.send(clothesRecord);
});

router.get('/clothes', async (request, response, next) => {
  let clothesRecord = await Clothes.findOne({ where: { id: request.params.id } });
  response.status(200);
  response.send(clothesRecord);
});

router.post('/clothes', async (request, response, next) => {
  let clothesRecord = await Clothes.create(request.body);
  response.status(200);
  response.send(clothesRecord);
});

router.put('/clothes', async (request, response, next) => {
  let clothesRecord = await Clothes.update(request.body, { where: { id: request.params.id } });
  response.status(200);
  response.send(clothesRecord);
});

router.delete('/clothes', async (request, response, next) => {
  await Clothes.destroy({ where: { id: request.params.id } });
  response.status(200);
  response.send(`Id ${request.params.id} deleted`);
});

module.exports = router;
