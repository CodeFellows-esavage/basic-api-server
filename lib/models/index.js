'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const catSchema = require('./cat.schema');
const foodSchema = require('./food.schema');

let db = new Sequelize(POSTGRES_URI);

const CatModel = catSchema(db, DataTypes);
const FoodModel = foodSchema(db, DataTypes);

module.exports = {
  db,
  CatModel,
  FoodModel,
};