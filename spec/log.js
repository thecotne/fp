var log = require('../src/log');

describe('log', function() {
    it('should call console.log', function() {
        var message = 'my log message';

        spyOn(console, 'log');

        log(message);

        expect(console.log).toHaveBeenCalledWith(message);
    });
});

