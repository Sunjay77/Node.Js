// function sayHello(name) {
//   console.log("hello" + name);
// }
// // sayHello( " sunjay" );
// // console.log(window); // in node we dont have window or document objects

// Node Module System

// console.log(); //global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// window.console.log; // we can use this window object for above all

// var message = ""; // for window var is available but not in global object
// global.console.log; // instead of window we have global object in node
// console.log(global.message) // It sends undefined in the terminal

// Modules

// var sayHello = function () {};

// window.sayHello(); // when we define in javascript realworld we split code so it can be possible to overwrite
// // we should avoid using variables and function in global scope
// // Instead we use modules

// console.log(module);

//To load the module we use

// const log = require("./logger"); // const to problem with accidenlty changing it
// log("message");

// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // console.log("Total Memory:" + totalMemory);
// // Templete string
// //ECMAscript 6
// console.log(`Total Memory ${totalMemory}`);
// console.log(`Free Memory ${freeMemory}`);

// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

//Events Module

// const EventEmmiter = require(`events`); // class
// const emmiter = new EventEmmiter(); // Actual Object

// const Logger = require("./logger");
// const logger = new Logger();
// // Register a listener
// logger.on("messageLogged", (arg) => {
//   // some use e, eventArg
//   console.log("Listener called", arg);
// });

// logger.log("message");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");
