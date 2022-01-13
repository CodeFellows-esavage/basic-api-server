'use strict';

const express = require('express');
const app = express();

const cat = require('./routes/cat.route');
const logger = require('./middleware/logger');

app.use(logger);
app.use('/cat', cat);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  },
  app,
};
