var Wunderground = require('wundergroundnode');
var GPIO = require('onoff').Gpio;

var myKey = '17bfc5114bc6424d';
var wunderground = new Wunderground(myKey);
var led1 = new GPIO(18, 'out');
var led2 = new GPIO(12, 'out');
var led3 = new GPIO(16, 'out');
var x;

setInterval(function() {
  wunderground.conditions().forecast().request('15213', function(err, response){
      x = response.current_observation.precip_today_in;
      console.log(x);
  })
      if (x > 0 && x <= .5) {
        console.log("turning on led1");
        setTimeout(function() {
          led1.writeSync(1)}, 5000)
      }
      else if (x > .5 && x <= 1) {
        console.log("turning on led1 & led2");
        setTimeout(function() {
          led1.writeSync(1);
          led2.writeSync(1);
        },5000)}

      else if (x > 1) {
        console.log("turning on led1 & led2 & led3");
        setTimeout(function() {
          led1.writeSync(1);
          led2.writeSync(1);
          led3.writeSync(1);
        },5000)}
      else {
        console.log("no rain")
      }
    }
, 10000);

process.on('SIGINT', function() {
    console.log("unexporting leds")
    led1.unexport();
    led2.unexport();
    led3.unexport();
})
