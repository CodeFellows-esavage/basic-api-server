'use strict';

const { start } = require('./lib/server');
const PORT = process.env.PORT || 3000;

start(PORT);