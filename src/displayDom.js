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
  const dataText = `Forecast: ${data.dayDescrip} ${data.forecast}
  Temperature: ${data.temp}°F
  Min temp: ${data.minTemp}°F
  Max temp: ${data.maxTemp}°F
  Feels like: ${data.feelsLike}°F
  Precipitation: ${data.precip} in
  Wind gusts: ${data.windGusts} mph
  Wind speed: ${data.windSpeed} mph
  UV index: ${data.uvIndex}
  Sunrise: ${data.sunrise}
  Sunset: ${data.sunset}`;
  return dataText;
}

export async function displayData(dataText) {
  let data = JSON.parse(dataText);
  data = await formatData(data);
  const div = document.createElement("div");
  div.textContent = data;
  document.body.appendChild(div);
}
