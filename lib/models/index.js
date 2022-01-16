'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const catSchema = require('./cat.schema');
const foodSchema = require('./food.schema');

let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const CatModel = catSchema(db, DataTypes);
const FoodModel = foodSchema(db, DataTypes);

module.exports = {
  db,
  CatModel,
  FoodModel,
};