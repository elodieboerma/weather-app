import "./styles.css";

export function getLocation() {
  return new Promise((resolve) => {
    const form = document.createElement("form");
    form.id = "locationForm";

    const label = document.createElement("label");
    label.setAttribute("for", "locationInput");
    label.textContent = "Enter location: ";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "locationInput";
    input.placeholder = "Dallas, TX";
    label.appendChild(input);

    const submit = document.createElement("input");
    submit.id = "submit";
    submit.type = "submit";
    submit.textContent = "Set location";

    form.append(label, submit);
    document.body.appendChild(form);

    submit.addEventListener("click", (event) => {
      event.preventDefault();

      resolve(input.value);

      form.remove();
    });
  });
}

function formatData(data) {
  const dataText = {
    today: `Today: ${data.dayDescrip}`,
    forecast: `Later: ${data.forecast}`,
    temp: `Temperature: ${data.temp}°F`,
    minTemp: `Min temp: ${data.minTemp}°F`,
    maxTemp: `Max temp: ${data.maxTemp}°F`,
    feelsLike: `Feels like: ${data.feelsLike}°F`,
    precip: `Precipitation: ${data.precip} in`,
    windGusts: `Wind gusts: ${data.windGusts} mph`,
    windSpeed: `Wind speed: ${data.windSpeed} mph`,
    uvIndex: `UV index: ${data.uvIndex}`,
    sunrise: `Sunrise: ${data.sunrise}`,
    sunset: `Sunset: ${data.sunset}`
  };
  return dataText;
}

export async function displayData(dataText) {
  let parsedData = JSON.parse(dataText);
  let data = await formatData(parsedData);

  const div = document.createElement("div");
  div.id = "data";

  const subheadingDiv = document.createElement("h3");
  subheadingDiv.id = "subheading";
  subheadingDiv.classList.add("border");
  const today = document.createElement("p");
  today.textContent = data.today;
  const forecast = document.createElement("p");
  forecast.textContent = data.forecast;
  subheadingDiv.append(today,forecast);

  const tempDescripDiv = document.createElement("div");
  tempDescripDiv.id = "temps";
  tempDescripDiv.classList.add("border");
  const temp = document.createElement("p");
  temp.textContent = data.temp;
  temp.id = "temp";
  const minTemp = document.createElement("p");
  minTemp.textContent = data.minTemp;
  minTemp.id = "minTemp";
  const maxTemp = document.createElement("p");
  maxTemp.textContent = data.maxTemp;
  maxTemp.id = "maxTemp";
  const feelsLike = document.createElement("p");
  feelsLike.textContent = data.feelsLike;
  feelsLike.id = "feelsLike";
  tempDescripDiv.append(temp, minTemp, maxTemp, feelsLike);

  const precipationDiv = document.createElement("div");
  precipationDiv.id = "precipitation";
  precipationDiv.classList.add("border");
  const precip = document.createElement("p");
  precip.textContent = data.precip;
  precipationDiv.append(precip);

  const windDiv = document.createElement("div");
  windDiv.id = "winds";
  windDiv.classList.add("border");
  const windGusts = document.createElement("p");
  windGusts.textContent = data.windGusts;
  const windSpeed = document.createElement("p");
  windSpeed.textContent = data.windSpeed;
  windDiv.append(windGusts, windSpeed);

  const uvDiv = document.createElement("div");
  uvDiv.id = "uv";
  uvDiv.classList.add("border");
  const uvIndex = document.createElement("p");
  uvIndex.textContent = data.uvIndex;
  uvDiv.append(uvIndex);

  const sunriseDiv = document.createElement("div");
  sunriseDiv.id = "sunrise";
  sunriseDiv.classList.add("border");
  const sunrise = document.createElement("p");
  sunrise.textContent = data.sunrise;
  sunriseDiv.append(sunrise);

  const sunsetDiv = document.createElement("div");
  sunsetDiv.id = "sunset";
  sunsetDiv.classList.add("border");
  const sunset = document.createElement("p");
  sunset.textContent = data.sunset;
  sunsetDiv.append(sunset);

  div.append(subheadingDiv,tempDescripDiv, precipationDiv, windDiv, uvDiv, sunriseDiv, sunsetDiv);
  document.body.appendChild(div);
  alignColor(parsedData.temp);
}


function alignColor(temp) {
  const divList = document.getElementsByClassName("border");
  const unit = document.getElementById("changeUnits").textContent;
  let color;
  if (temp < 20 && unit === "Fahrenheit" || temp < -7.2 && unit === "Celsius") {
    color = "rgb(83, 83, 247)";
  } else if (temp >= 20 && temp < 40 && unit === "Fahrenheit" || temp > -7.2 && temp < 4.4 && unit === "Celsius") {
    color = "rgb(147, 243, 147)";
  } else if (temp >= 40 && temp < 60 && unit === "Fahrenheit" || temp > 4.4 && temp < 15.5 && unit === "Celsius") {
    color = "rgb(247, 247, 163)";
  } else if (temp >= 60 && temp < 80 && unit === "Fahrenheit" || temp > 15.5 && temp < 26.6 && unit === "Celsius") {
    color = "rgb(245, 200, 116)";
  } else if (temp >= 80 && unit === "Fahrenheit" || temp > 26.6 && unit === "Celsius") {
    color = "rgb(248, 103, 103)";
  } else {
    color = "black";
  }

  for (let i = 0; i < divList.length; i++) {
    console.log(divList[i]);
    console.log(color);
    divList[i].style.borderColor = color;
  }
}