'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define(
  'Clothes',
  {
    clothesName: {
      type: DataTypes.STRING,
    },
  },
);

module.exports = clothesSchema;
