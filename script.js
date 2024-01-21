//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b74db75f0fmshb5713521c9709e7p13227ajsn81c64ed9a94b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((reponse) => reponse.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


getWeather("Noida");

