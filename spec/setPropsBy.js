var setPropsBy = require('../src/setPropsBy');

describe('setPropsBy', function() {
    it('should be curried', function() {
        expect(setPropsBy({amount: parseInt})).toBeFunction();
    });

    it('should apply functions to object parameters', function() {
        var obj = {
            amount: '1',
            some: '1.1',
            arr: [1],
        };
        var result = {
            amount: 1,
            some: 1.1,
            arr: '[1]',
        };
        var opts = {
            amount: parseInt,
            some: parseFloat,
            arr: JSON.stringify,
        };

        expect(setPropsBy(opts, obj)).toEqual(result);
    });
});

