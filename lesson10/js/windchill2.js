const apiURL1= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=dcb22e10016da9ef1aeb0b0a22df9dca';

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main; 
    document.getElementById('current-temp').textContent = jsObject.main.temp + " ˚F"; 
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %"; 
    document.getElementById('wind-speed').textContent = jsObject.wind.speed + " mph"; 

    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    if (t <= 50 && s > 3) {
      let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
      document.getElementById("windchill").textContent = chill.toFixed(2) + " ˚F"; 
    } else {
      document.getElementById("windchill").textContent = "N/A"; 
    }
  });