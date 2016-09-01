var sumOf = require('../src/sumOf');

describe('sumOf', function() {
    it('should be curried', function() {
        expect(sumOf('name')).toBeFunction();
    });

    it('should count sum of Number Array', function() {
        var cart = [
            {
                amount: 1,
            }, {
                amount: 2,
            }, {
                amount: 3,
            },
        ];

        expect(sumOf('amount', cart)).toBe(6);
    });
});

