require('jasmine-expect');

var rename = require('../src/rename');

describe('rename', function() {
    it('should be curried', function() {
        expect(rename([])).toBeFunction();
    });

    it('should rename prop', function() {
        var obj = {
            myName: 'cotne',
            app_some: 1,
        };
        var result = {
            name: 'cotne',
            app_some: 1,
        };

        expect(rename('myName', 'name', obj)).toEqual(result);
    });
});

