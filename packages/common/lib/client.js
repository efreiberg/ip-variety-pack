module.exports = class Client {
    constructor() { }

    send() {
        throw new Error('Client must implement a send method');
    }
}