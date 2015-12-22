var arDrone = require('ar-drone');
//console.log("Client creation starting.");
var client = arDrone.createClient();
//console.log("Client created");
client.takeoff();

client.after(7000, function() {
	this.stop();
	this.land();
})
//client.stop();
//client.land(function(){console.log("Land!");});
