require('./styles');
// require('./api-scripts');
var newAlert = require('./alert');

newAlert();

function getAllWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather', function(data) {
    console.log(data);
  });
}