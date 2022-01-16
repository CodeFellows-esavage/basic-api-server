'use strict';

require('dotenv').config();
const { start } = require('./lib/server');
const { db } = require('./lib/models');
const PORT = process.env.PORT || 3000;


db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));

