var request = require('request');
var encodedLocation = "Washington,dc";
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=2cc14f1ea516b96a82fbede67ca1f029&q=' + encodedLocation + '&units=imperial';

request({
  url: url,
  json: true
}, function(error, response, body){
  if (error) {
    console.log('Unable to fetch weather');
  } else {
    // console.log(JSON.stringify(body, null, 4));
    console.log("It's " + body.main.temp + " in " + body.name);
  }
});

console.log('After request!');