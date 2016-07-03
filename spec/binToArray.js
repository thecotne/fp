require('jasmine-expect');

var binToArray = require('../src/binToArray');

describe('binToArray', function() {

    it('should return array from number', function() {

        expect(binToArray(1+2+4)).toEqual([1,2,4]);
        expect(binToArray(1+2+8)).toEqual([1,2,8]);
        expect(binToArray(2+8)).toEqual([2,8]);
    });
});
