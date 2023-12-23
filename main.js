import buildLink from "./LinkBuilder.js";
import getWeather from "./GetWeather.js"
import parseWeather from "./JsonParser.js";
import configButtons from "./WeatherButtons.js";
async function btnClick() {
    document.getElementById("weather-table").style.display = "flex";
    let link = buildLink(document.getElementById("city").value, 3);
    getWeather(link).then((response)=>{
        let weatherArray =  parseWeather(response);
        configButtons(weatherArray);

    });
}

document.getElementById("weatherForm").addEventListener("submit", btnClick);