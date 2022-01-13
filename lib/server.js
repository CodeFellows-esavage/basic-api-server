'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');

app.use(logger);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  },
  app,
};
