var R = require('ramda');

module.exports = R.curry(function (name, fn, obj) {
    return R.assoc(name, fn(R.prop(name, obj)), obj);
});
