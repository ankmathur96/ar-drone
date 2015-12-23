/* 
	Makes drone fly in a smooth circle at a constant altitude
*/

var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var i = 0;

client.takeoff();

while (i < 100) {
	client.clockwise(0.25);
    client.forward(0.25);
    client.right(0.10);
    i += 1;
}
client.stop();
client.land();

