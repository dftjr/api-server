'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food',
  {
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = foodSchema;
