var R = require('ramda');

// mapKeys :: (String -> String) -> {String: a} -> {String: a}
module.exports = R.curry(function (fn, obj) {
    return R.zipObj(R.map(fn, R.keys(obj)), R.values(obj));
});
