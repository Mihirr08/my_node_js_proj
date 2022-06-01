const { EventEmitter } = require("stream");

class MyLogger extends EventEmitter{

    myLog(message){

        console.log('in My Logger');

        this.emit('MyLoggerCalled',message);

    }

}

module.exports = MyLogger;