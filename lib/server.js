'use strict';

const express = require('express');
const app = express();

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  },
  app,
};
