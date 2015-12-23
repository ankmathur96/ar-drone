/* 
    Makes drone fly in a smooth circle at a constant altitude
*/

var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var i = 0;

client.takeoff();

client
    .after(2000, function() {
        this.stop();
        this.up(0.2);
    })
    .after(7000, function(){
        this.stop();
        this.front(0.2);
    })
    .after(9000, function(){
        this.front(0.1);
    }) 
    .after(10000, function(){
        this.front(0.05);
    })
    .after(12000, function(){
        this.stop();
        this.land();
    })

