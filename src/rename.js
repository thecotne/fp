var R = require('ramda');
var renameAll = require('./renameAll');

module.exports = R.curry(function (name, newName, obj) {
    var names = {};
    names[name] = newName;
    return renameAll(names, obj);
});
