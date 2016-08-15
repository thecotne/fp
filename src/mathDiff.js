var R = require('ramda');

module.exports = R.curry(function(a, b) {
    return b - a;
});
