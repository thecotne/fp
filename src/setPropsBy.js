var R = require('ramda');

module.exports = R.curry(function (names, obj) {
    return R.mapObjIndexed(function (value, key, obj) {
        return R.propOr(R.clone, key, names)(value);
    }, obj);
});
