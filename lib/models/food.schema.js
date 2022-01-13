'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  healthy: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Food;