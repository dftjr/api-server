'use strict';

const express = require('express');
const { Clothes } = require('../models');
const router = express.Router();

router.get('/clothes', readClothes);
router.get('/clothes/:id', readOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function readClothes(request, response, next) {
  let foodRecords = await Clothes.findAll();
  response.status(200);
  response.send(foodRecords);
}

async function readOneClothes(request, response, next) {
  let foodRecord = await Clothes.findOne({ where: { id: request.params.id } });
  response.status(200);
  response.send(foodRecord);
}

async function createClothes(request, response, next) {
  let foodRecord = await Clothes.create(request.body);
  response.status(200);
  response.send(foodRecord);
}

async function updateClothes(request, response, next) {
  let foodRecord = await Clothes.update(request.body, { where: { id: request.params.id } });
  response.status(200);
  response.send(foodRecord);
}

async function deleteClothes(request, response, next) {
  await Clothes.destroy({ where: { id: request.params.id } });
  response.status(200);
  response.send(`Id ${request.params.id} deleted`);
}

module.exports = router;
