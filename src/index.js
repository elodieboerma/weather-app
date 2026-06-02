import "./styles.css";





async function askForData(location) {
    //try {
        const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?key=Z2DU46G98V6KDED84PT8KUMZF`;
        const response = await fetch(link);
        const data = await response.json();
        console.log(data);
    /*} catch (err) {
        console.log("error: " + err);
    });*/
    return data;
}



function useLocation() {
    // location from dynamic form
    const data = askForData(location)
    return data;
}



function processData () {
    const data = useLocation();
    const weatherData = data.parse();
    return weatherData;
}



function chooseData() {
    const fullData = processData();

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

    const neededData = {forecast: forecastDescrip, temp: temp,minTemp: minTemp, maxTemp: maxTemp, 
        feelsLike: feelsLike, precip: precip, windGusts: windGusts, windSpeed: windSpeed, uvIndex: uvIndex, 
        sunrise: sunrise, sunset: sunset, dayDescrip: dayDescrip
    };

    if (precip !== 0) {
        Object.defineProperty(neededData, "precipType", {value: precipType});
        if (snow !== 0 && precipType === "snow") {
            Object.defineProperty(neededData, "snow", {value: snow});
            Object.defineProperty(neededData, "snowfall", {value: snowfall});
        };
    };

    return neededData;
}





const chosenData = chooseData();
console.log(chosenData);