import "./styles.css";
import { getLocation, displayData } from "./displayDom.js";

const button = document.getElementById("selectLocation");
const changeUnitsButton = document.getElementById("changeUnits");
let currentUnit = "F";

button.addEventListener("click", async (event) => {
  event.preventDefault();
  const dataText = await processChosenData();
  if (document.querySelector("#data")) {
    document.querySelector("#data").remove();
  }
  await displayData(dataText);

  if (currentUnit === "C") {
    const dataNums = {
      temp: document.getElementById("temp"),
      min: document.getElementById("minTemp"),
      max: document.getElementById("maxTemp"),
      feelsLike: document.getElementById("feelsLike")
    };
    changeToCelsius(dataNums);
  }
});

changeUnitsButton.addEventListener("click", (event) => {
  event.preventDefault();
  const temp = document.getElementById("temp");
  const min = document.getElementById("minTemp");
  const max = document.getElementById("maxTemp");
  const feelsLike = document.getElementById("feelsLike");
  const dataNums = {
    temp: temp,
    min: min,
    max: max,
    feelsLike: feelsLike
  };

  currentUnit = currentUnit === "F" ? "C" : "F";
  changeUnitsButton.textContent = currentUnit === "F" ? "Fahrenheit" : "Celsius";

  if (dataNums.temp) {
    if (currentUnit === "C") {
      changeToCelsius(dataNums);
    } else {
      changeToFahrenheit(dataNums);
    }
  }
});

function changeToCelsius(dataNums) {
  for (let element of Object.values(dataNums)) {
    const match = element.textContent.match(/\d+\.?\d*/);
    if (match) {
      const celsiusEquiv = (parseFloat(match[0]) - 32) * (5/9);
      element.textContent = `${element.textContent.split(':')[0]}: ${celsiusEquiv.toFixed(1)}°C`;
    }
  }
}

function changeToFahrenheit(dataNums) {
  for (let element of Object.values(dataNums)) {
    const match = element.textContent.match(/\d+\.?\d*/);
    if (match) {
      const fahrenheitEquiv = (parseFloat(match[0]) * (9/5)) + 32;
      element.textContent = `${element.textContent.split(':')[0]}: ${fahrenheitEquiv.toFixed(1)}°F`;
    }
  }
}

async function askForData(location) {
  try {
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Z2DU46G98V6KDED84PT8KUMZF`;
    const response = await fetch(link);
    return response;
  } catch (err) {
    console.log("error: " + err);
  }
}

async function processData() {
  const location = await getLocation();
  const response = await askForData(location);

  const data = await response.json();
  return data;
}

async function chooseData() {
  const fullData = await processData();

  const forecastDescrip = fullData.description;

  const temp = fullData.days[0].temp;
  const minTemp = fullData.days[0].tempmin;
  const maxTemp = fullData.days[0].tempmax;
  const feelsLike = fullData.days[0].feelslike;
  const precip = fullData.days[0].precip;
  const precipType = fullData.days[0].preciptype;
  const snow = fullData.days[0].snow;
  const snowfall = fullData.days[0].snowDepth;
  const windGusts = fullData.days[0].windgust;
  const windSpeed = fullData.days[0].windspeed;
  const uvIndex = fullData.days[0].uvindex;
  const sunrise = fullData.days[0].sunrise;
  const sunset = fullData.days[0].sunset;
  const dayDescrip = fullData.days[0].description;

  const neededData = {
    forecast: forecastDescrip,
    temp: temp,
    minTemp: minTemp,
    maxTemp: maxTemp,
    feelsLike: feelsLike,
    precip: precip,
    windGusts: windGusts,
    windSpeed: windSpeed,
    uvIndex: uvIndex,
    sunrise: sunrise,
    sunset: sunset,
    dayDescrip: dayDescrip,
  };

  if (precip !== 0) {
    Object.defineProperty(neededData, "precipType", { value: precipType });
    if (snow !== 0 && precipType === "snow") {
      Object.defineProperty(neededData, "snow", { value: snow });
      Object.defineProperty(neededData, "snowfall", { value: snowfall });
    }
  }

  return neededData;
}

export async function processChosenData() {
  const chosenData = await chooseData();
  const dataText = JSON.stringify(chosenData);
  return dataText;
}
