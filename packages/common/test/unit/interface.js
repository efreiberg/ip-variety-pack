var assert = require('chai').assert;
let Client = require('../../lib/client');
let Server = require('../../lib/server');

describe('Interface Check', function(){
    it('Server Init', function(){
        let _server = new Server();
        assert.throws(_server.kill, Error);
        assert.throws(_server.listen, Error);
    });
    it('Client Init', function(){
        let _client = new Client();
        assert.throws(_client.send, Error);
    })
});