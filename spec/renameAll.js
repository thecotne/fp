require('jasmine-expect');

var renameAll = require('../src/renameAll');

describe('renameAll', function() {
    it('should be curried', function() {
        expect(renameAll([])).toBeFunction();
    });

    it('should rename all props by obj', function() {
        var obj = {
            myName: 'cotne',
            app_some: 1,
        };
        var result = {
            name: 'cotne',
            app: 1,
        };
        var names = {
            myName: 'name',
            app_some: 'app',
        };

        expect(renameAll(names, obj)).toEqual(result);
    });
});

