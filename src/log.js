var R = require('ramda');

// could not test this implementation
// module.exports = R.tap(console.log);

module.exports = arg => {
    console.log(arg);
    return arg;
};
