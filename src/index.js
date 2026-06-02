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

    const temp = fullData.days[0].temp;
    

    const neededData = {temp: temp};
    return neededData;
}





const chosenData = chooseData();
console.log(chosenData);