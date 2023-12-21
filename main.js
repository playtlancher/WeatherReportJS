import buildLink from "./LinkBuilder.js";
import getWeather from "./GetWeather.js"
async function btnClick() {
    let link = buildLink(document.getElementById("city").value, document.getElementById("days").value);
    console.log(link);
    let response = getWeather(link);
    console.log(response);
    return false;
}

function daysInput(id) {
    const days = document.getElementById(id);


    days.addEventListener('input', function () {

        let currentValue = parseInt(this.value, 10);
        if (currentValue < parseInt(this.min, 10)) {
            currentValue = parseInt(this.min, 10);
        } else if (currentValue > parseInt(this.max, 10)) {
            currentValue = parseInt(this.max, 10);
        }
        this.value = currentValue;
    });
}
daysInput("days");
document.getElementById("WeatherBtn").addEventListener("click",btnClick);