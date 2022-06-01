
const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log('From logger: ' + message);
    
    // Raise an event / emit an event
    this.emit('messageLogged', { id: 1, message: message });
    }
}

module.exports = Logger;

