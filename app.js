
/// path module
// const path = require('path');
// var pathObject = path.parse(__filename);
// console.log(pathObject);

/// os module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('total memory '+totalMemory/8000000000 );
// console.log('free memory '+freeMemory/8000000000 );

/// Event module
// const Logger = require('./logger');
// const logger = new Logger();
// // Register a listener
// logger.on('messageLogged',(args) => {
//     console.log('Message logged called ',args)
// });

// logger.log('this is from app.js');

//http module
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Try localhost:1204/greetme');
        res.end();
    }
    if (req.url === '/greetme') {
        res.write('Hello I am app.js');
        res.end();
    }
    if (req.url === '/api/giveJson') {
        res.write(JSON.stringify([1, 2, 'Mihir']))
        res.end();
    }
});
server.listen(1204);
// server.on('connection', (socket) => {
//     console.log('New connection');

// });
console.log('Listening on port 1204.............');




// //Exercise
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('loading',(args) => {
//     console.log('Emitted event ',args.data);
// });

// const MyLogger = require('./myLogger');

// const myLogger = new MyLogger();

// myLogger.on('MyLoggerCalled', (args) => {
//     console.log('My logger listener ',args);
// });

// myLogger.myLog('This is my message from app.js');


