'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const foodSchema = require('./food.js');
const clothesSchema = require('./clothes.js');

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

let sequelize = new Sequelize(DATABASE_URL, process.env === 'production' ? herokuOptions : {});

let FoodModel = foodSchema(sequelize, DataTypes);
let ClothesModel = clothesSchema(sequelize, DataTypes);

module.exports = {
  Food: FoodModel,
  Clothes: ClothesModel,
  db: sequelize,
};
