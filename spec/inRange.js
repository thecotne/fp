var inRange = require('../src/inRange');

describe('inRange', function() {
    it('should be curried', function() {
        expect(inRange(1)).toBeFunction();
    });

    it('should check if number is in range', function() {

        expect(inRange(10, 10, 12)).toBe(true);
        expect(inRange(100, 10, 200)).toBe(true);
        expect(inRange(30, -10, 300)).toBe(true);

        expect(inRange(9, 10, 12)).toBe(false);
        expect(inRange(300, 10, 200)).toBe(false);
        expect(inRange(-90, -10, 300)).toBe(false);
    });
});
