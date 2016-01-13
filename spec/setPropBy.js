require('jasmine-expect');

var setPropBy = require('../src/setPropBy');

describe('setPropBy', function() {
    it('should be curried', function() {
        expect(setPropBy('name')).toBeFunction();
    });

    it('should apply function to object parameter', function() {
        var obj = {
            amount: '1',
            some: '1.1',
            arr: [1],
        };
        var result = {
            amount: 1,
            some: '1.1',
            arr: [1],
        };

        expect(setPropBy('amount', parseInt, obj)).toEqual(result);
    });
});

