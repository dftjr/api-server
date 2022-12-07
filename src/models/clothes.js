'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define(
  'Clothes',
  {
    clothesName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = clothesSchema;
