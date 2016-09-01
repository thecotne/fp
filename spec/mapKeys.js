var mapKeys = require('../src/mapKeys');

describe('mapKeys', function() {
    it('should be curried', function() {
        expect(mapKeys(function () {})).toBeFunction();
    });

    it('should apply function to object keys', function() {
        var obj = {
            name: 'cotne',
            some: 1,
        };
        var result = {
            app_name: 'cotne',
            app_some: 1,
        };
        var fn = function (key) {
            return 'app_' + key;
        };

        expect(mapKeys(fn, obj)).toEqual(result);
    });
});

