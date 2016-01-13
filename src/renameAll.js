var R = require('ramda');
var mapKeys = require('./mapKeys');

module.exports = R.curry(function (names, obj) {
    return mapKeys(function (key) {
        return R.propOr(key, key, names);
    }, obj);
});

