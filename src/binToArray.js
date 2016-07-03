var R = require('ramda');

// Number -> [Number]
module.exports = R.pipe(
    function(num) {
        return num.toString(2);
    },
    R.split(''),
    R.reverse,
    R.toPairs,
    R.filter(R.propEq(1, '1')),
    R.pluck(0),
    R.map(function(val) {
        return parseInt(`1${'0'.repeat(parseInt(val))}`, 2);
    })
);
