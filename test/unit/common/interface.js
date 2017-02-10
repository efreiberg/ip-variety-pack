var assert = require('chai').assert;
let Client = require('../../../packages/common').Client;
let Server = require('../../../packages/common').Server;

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