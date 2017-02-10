module.exports = class Server {
    constructor() { }

    listen() {
        throw new Error('Server must implement a listen method');
    }

    kill() {
        throw new Error('Server must implement a kill method');
    }
}