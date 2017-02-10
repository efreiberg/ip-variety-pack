var assert = require('chai').assert;
let Client = require('../../lib/client');
let Server = require('../../lib/server');

describe('Class Init', function(){
    it('Server Init', function(){
        let _server = new Server();
        assert.isOk(_server);
        assert.isFunction(_server.kill);
        assert.isFunction(_server.listen);
    });
    it('Client Init', function(){
        let _client = new Client();
        assert.isOk(_client);
        assert.isFunction(_client.send);
    })
});