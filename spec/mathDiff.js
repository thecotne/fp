var mathDiff = require('../src/mathDiff');

describe('mathDiff', function() {
    it('should be curried', function() {
        expect(mathDiff(2)).toBeFunction();
    });

    it('should should return correct number', function() {

        expect(mathDiff(2, 3)).toEqual(1);
    });
});

