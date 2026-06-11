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
  let data = JSON.parse(dataText);
  data = await formatData(data);

  const div = document.createElement("div");
  div.id = "data";

  const subheadingDiv = document.createElement("h3");
  subheadingDiv.id = "subheading";
  const today = document.createElement("p");
  today.textContent = data.today;
  const forecast = document.createElement("p");
  forecast.textContent = data.forecast;
  subheadingDiv.append(today,forecast);

  const tempDescripDiv = document.createElement("div");
  tempDescripDiv.id = "temps";
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
  const precip = document.createElement("p");
  precip.textContent = data.precip;
  precipationDiv.append(precip);

  const windDiv = document.createElement("div");
  windDiv.id = "winds";
  const windGusts = document.createElement("p");
  windGusts.textContent = data.windGusts;
  const windSpeed = document.createElement("p");
  windSpeed.textContent = data.windSpeed;
  windDiv.append(windGusts, windSpeed);

  const uvDiv = document.createElement("div");
  uvDiv.id = "uv";
  const uvIndex = document.createElement("p");
  uvIndex.textContent = data.uvIndex;
  uvDiv.append(uvIndex);

  const sunriseDiv = document.createElement("div");
  sunriseDiv.id = "sunrise";
  const sunrise = document.createElement("p");
  sunrise.textContent = data.sunrise;
  sunriseDiv.append(sunrise);

  const sunsetDiv = document.createElement("div");
  sunsetDiv.id = "sunset";
  const sunset = document.createElement("p");
  sunset.textContent = data.sunset;
  sunsetDiv.append(sunset);

  div.append(subheadingDiv,tempDescripDiv, precipationDiv, windDiv, uvDiv, sunriseDiv, sunsetDiv);
  document.body.appendChild(div);
}
