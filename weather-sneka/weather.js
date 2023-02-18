const temperatureField = document.querySelector(".temp h1");
const locationField = document.querySelector(".time_location h3");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const humidityField = document.querySelector(" #humidity ");
const form = document.querySelector("form");
const windField = document.querySelector("#wind");
const uvField = document.querySelector("#uv");
const pressureField = document.querySelector("#pressure");
const cloudField = document.querySelector("#cloud");
const winddegreeField = document.querySelector("#winddegree");
const fahrenheitField = document.querySelector("#fahrenheit");
const feelsField = document.querySelector("#feels");

function searchForLocation(event) {
  console.log(event);
  if (event.key === "Enter") fetchResults();
}

const fetchResults = async () => {
  navigator.geolocation.getCurrentPosition(async (p) => {
    var city = "";
    var lat = "";
    var lan = "";
    var url;

    city = document.getElementById("search").value;
    lat = p.coords.latitude;
    lan = p.coords.longitude;

    console.log(city);

    if (city !== "") {
      url = `http://api.weatherapi.com/v1/forecast.json?key=d244f4ba43f24d39b1492452231302&q=${city}&days=7&aqi=no&alerts=no`;
    } else {
      url = `http://api.weatherapi.com/v1/forecast.json?key=d244f4ba43f24d39b1492452231302&q=${lat},${lan}&days=7&aqi=no&alerts=no`;
    }

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let humidity = data.current.humidity;
    let wind = data.current.wind_mph;
    let uv = data.current.uv;
    let pressure = data.current.pressure_in;
    let cloud = data.current.cloud;
    let winddegree = data.current.wind_degree;
    let fahrenheit = data.current.temp_f;
    let feels = data.current.feelslike_f;

    updateDetails(
      temp,
      locationName,
      time,
      condition,
      humidity,
      wind,
      uv,
      pressure,
      cloud,
      winddegree,
      fahrenheit,
      feels
    );

    const weekday = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const icon2 = data.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".icon2").src = "https:" + icon2;
    document.getElementById("condn2").innerHTML =
      data.forecast.forecastday[1].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[1].date;
    var datet = new Date(dd);
    let day = weekday[datet.getDay()];
    document.getElementById("day2").innerHTML = day;
    console.log(day);

    const icon3 = data.forecast.forecastday[2].day.condition.icon;
    document.querySelector(".icon3").src = "https:" + icon3;
    document.getElementById("condn3").innerHTML =
      data.forecast.forecastday[2].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[2].date;
    var datet = new Date(dd);
    day = weekday[datet.getDay()];
    document.getElementById("day3").innerHTML = day;
    console.log(day);

    const icon4 = data.forecast.forecastday[3].day.condition.icon;
    document.querySelector(".icon4").src = "https:" + icon4;
    document.getElementById("condn4").innerHTML =
      data.forecast.forecastday[3].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[3].date;
    var datet = new Date(dd);
    day = weekday[datet.getDay()];
    document.getElementById("day4").innerHTML = day;
    console.log(day);

    const icon5 = data.forecast.forecastday[4].day.condition.icon;
    document.querySelector(".icon5").src = "https:" + icon5;
    document.getElementById("condn5").innerHTML =
      data.forecast.forecastday[4].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[4].date;
    var datet = new Date(dd);
    day = weekday[datet.getDay()];
    document.getElementById("day5").innerHTML = day;
    console.log(day);

    const icon6 = data.forecast.forecastday[5].day.condition.icon;
    document.querySelector(".icon6").src = "https:" + icon6;
    document.getElementById("condn6").innerHTML =
      data.forecast.forecastday[5].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[5].date;
    var datet = new Date(dd);
    day = weekday[datet.getDay()];
    document.getElementById("day6").innerHTML = day;
    console.log(day);

    const icon7 = data.forecast.forecastday[6].day.condition.icon;
    document.querySelector(".icon7").src = "https:" + icon7;
    document.getElementById("condn7").innerHTML =
      data.forecast.forecastday[6].day.avgtemp_c + "\u00B0" + "C";
    var dd = data.forecast.forecastday[6].date;
    var datet = new Date(dd);
    day = weekday[datet.getDay()];
    document.getElementById("day7").innerHTML = day;
    console.log(day);
    document.getElementById("display").style.display = "block";
  });
};

function updateDetails(
  temp,
  locationName,
  time,
  condition,
  humidity,
  wind,
  uv,
  pressure,
  cloud,
  winddegree,
  fahrenheit,
  feels
) {
  temperatureField.innerText = temp + "\u00B0" + "C";
  locationField.innerText = locationName;
  dateandTimeField.innerText = time;
  conditionField.innerText = condition;
  humidityField.innerText = humidity;
  windField.innerText = wind;
  uvField.innerText = uv;
  pressureField.innerText = pressure;
  cloudField.innerText = cloud;
  winddegreeField.innerText = winddegree;
  fahrenheitField.innerText = fahrenheit;
  feelsField.innerText = feels;
}

fetchResults();
