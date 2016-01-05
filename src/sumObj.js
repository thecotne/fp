var R = require('ramda');

module.exports = R.pipe(R.values, R.sum);
