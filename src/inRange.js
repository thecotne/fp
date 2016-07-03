var R = require('ramda');

module.exports = R.curry(function(num, min, max) {
    return num >= min && num <= max;
});
