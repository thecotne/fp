var sumObj = require('../src/sumObj');

describe('sumObj', function() {
    it('should count sum of object props', function() {
        var obj = {
            prop1: 1,
            prop2: 2,
            prop3: 3,
        };

        expect(sumObj(obj)).toBe(6);
    });
});

