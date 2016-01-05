var R = require('ramda');

module.exports = R.curry(function(name, arr) {
    return R.pipe(R.pluck(name), R.sum)(arr);
});
