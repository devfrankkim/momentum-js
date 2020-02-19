const weather = document.querySelector(".js-weather");

const API_KEY = "07e2a8964a052cf6f1c86f9c1c5aea2e";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const yourTemperature = json.main.temp;
      const feelTemperature = json.main.feels_like;
      const yourPlace = json.name;
      weather.innerText = ` Temperature ${yourTemperature}°C and feels like ${feelTemperature}°C  @ ${yourPlace} `;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log(`Can't acess the location`);
}
function askForCoords() {
  navigator.geolocation.watchPosition(handleGeoSucess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    // console.log(parsedCoords.latitude, parsedCoords.longitude);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();

/*The watchPosition() method lets you register a handler that the browser calls automatically every time that the device's position changes. This is preferable to polling.
id = navigator.geolocation.watchPosition(success[, error[, options]])
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition


API KEY => https://home.openweathermap.org/api_keys 
Application Programming Interface
=> a simple way of getting data from other servers 
*/
