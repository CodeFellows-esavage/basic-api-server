'use strict';

function err404(req, res, next) {
  console.error('No Route Found!');
  res.status(404).send('Not Found');
}

module.exports = err404;