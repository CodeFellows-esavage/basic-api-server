'use strict';

const express = require('express');
const app = express();

const cat = require('./routes/cat.route');
const food = require('./routes/food.route');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);
app.use('/cat', cat);
app.use('/food', food);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  },
  app,
};
