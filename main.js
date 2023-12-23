import buildLink from "./LinkBuilder.js";
import getWeather from "./GetWeather.js"
import parseWeather from "./JsonParser.js";
import configButtons from "./WeatherButtons.js";

async function btnClick() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Input city must contain something!")
        return false;
    }
    let link = buildLink(city, 3);
    getWeather(link).then((response) => {
        if (response === undefined) {
            alert("The city must exist");
            return false;
        }
        let weatherArray = parseWeather(response);
        configButtons(weatherArray);
    });
    document.getElementById("weather-table").style.display = "flex";
}

document.getElementById("weatherForm").addEventListener("submit", btnClick);