function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDate = document.querySelector(".current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
}
console.log(formatDate(new Date()));

function showTemperature(response) {
  console.log(response);
}

let apiKey = "81d3b72cf20047c3d27312be14b34f47";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=81d3b72cf20047c3d27312be14b34f47";

axios.get(apiUrl).then(showTemperature);
