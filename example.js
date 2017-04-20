var GPIO = require('onoff').Gpio;

var led1 = new GPIO(18, 'out');
var led2 = new GPIO(15, 'out');
var led3 = new GPIO(16, 'out');


setInterval(function() {

        console.log("turning on led1");
        setTimeout(function() {
          led1.writeSync(1)}, 5000)
        }
          ,2001);

setInterval(function() {
        console.log("turning on led1 & led2");
        setTimeout(function() {
          led1.writeSync(1);
          led2.writeSync(1);
        },5000)
      },
        2500);

setInterval(function() {
        console.log("turning on led1 & led2 & led3");
        setTimeout(function() {
          led1.writeSync(1);
          led2.writeSync(1);
          led3.writeSync(1);
        },
          5000)},
        3000);


process.on('SIGINT', function() {
    console.log("unexporting leds")
    led1.unexport();
    led2.unexport();
    led3.unexport();
})
