var arDrone = require('ar-drone');
console.log("Client creation starting.");
var client = arDrone.createClient();
client.createRepl();