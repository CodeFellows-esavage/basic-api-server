'use strict';

const Cat = (sequelize, DataTypes) => sequelize.define('Cat', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  color: {
    type: DataTypes.STRING,
  },
});

module.exports = Cat;