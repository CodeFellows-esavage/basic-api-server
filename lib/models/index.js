'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const catSchema = require('./cat.schema');

let db = new Sequelize(POSTGRES_URI);

const CatModel = catSchema(db, DataTypes);

module.exports = {
  db,
  CatModel,
};