/* 
	Makes drone fly in a smooth circle at a constant altitude
*/

var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var i = 0;

client.takeoff();

client
	.after(1000, function() {
    	client.forward(0.25);
    	client.right(0.10);
	})

	.after(1000, function(){
		client.stop();
		client.land();
	})

