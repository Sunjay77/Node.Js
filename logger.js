// console.log(__filename);
// console.log(__dirname);
const EventEmmiter = require(`events`);

var url = "http://mylogger.com/log";

class logger extends EventEmmiter {
  log(message) {
    //Send an HTTP request
    console.log(message);
    // Raise an Event
    this.emit("messageLogged", { id: 1, url: "" }); // meaning signaling
  }
}

module.exports = logger;
