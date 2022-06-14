
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
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Try localhost:1204/greetme');
//         res.end();
//     }
//     if (req.url === '/greetme') {
//         res.write('Hello I am app.js');
//         res.end();
//     }
//     if (req.url === '/api/giveJson') {
//         res.write(JSON.stringify([1, 2, 'Mihir']))
//         res.end();
//     }
// });
// server.listen(1204);
// // server.on('connection', (socket) => {
// //     console.log('New connection');

// // });
// console.log('Listening on port 1204.............');




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

const express = require('express');
const req = require('express/lib/request');
const Joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    {
        id: 1,
        name: 'course1',
    },
    {
        id: 2,
        name: 'course2',
    },
    {
        id: 3,
        name: 'course3',
    },
    {
        id: 4,
        name: 'course4',
    },
];

//GET requests
app.get('/', (req, res) => {

    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course){
      res.status(404).send('No courses found.')
  }
  else{
      res.send(course);
  }
});
app.get('/api/posts/:year/:months', (req, res) => {
    res.send(req.query);
});

//POST request

app.post('/api/courses', (req,res) => {
    const {error} = validateCourse(req.body);
    if(error){
        res.status(400).send('Invalid values');
        return;
    }
    console.log("Post method called ",req);
        const course = {
            id : courses.length + 1,
            name : req.body.name,
        };
        courses.push(course);
        res.send(courses);
});

//Put method
app.put('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('No courses found.')
    }

    const {error} = validateCourse(req.body);
    if(error){
        res.status(400).send('Invalid values');
        return;
    }
    
    course.name = req.body.name;
    console.log('Updated courses ',courses)

    res.send(course);
    

});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
        // return Joi.validate(course,schema);
        
    return schema.validate(course);
}

//Delete Method
app.delete('/api/courses/delete/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('No courses found.');
        return;
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(courses);  

} );

//Port
//Set env port variable : $env:PORT=5000
const port = process.env.PORT || 1204;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

