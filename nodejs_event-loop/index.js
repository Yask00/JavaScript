// SRC
// https://medium.freecodecamp.org/walking-inside-nodejs-event-loop-85caeca391a9

const fs = require('fs');

const setTimeOutLogger = () => {
    console.log(`SetTimeoutLogger`);
}

const setImmediateLogger = ()=>{
    console.log('setImmediate logger');
}

//For timeout
setTimeout(setTimeOutLogger, 1000);

//File I/O operation
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 1');
});
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 2');
});
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 3');
});
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 4');
});
fs.readFile('test.txt', 'utf-8',(data)=>{
    console.log('Reading data 5');
});

//For setImmediate
setImmediate(setImmediateLogger);
setImmediate(setImmediateLogger);
setImmediate(setImmediateLogger);