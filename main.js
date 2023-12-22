import buildLink from "./LinkBuilder.js";
import getWeather from "./GetWeather.js"
import parseWeather from "./JsonParser.js";
async function btnClick() {
    let link = buildLink(document.getElementById("city").value, 3);
    getWeather(link).then((response)=>{
        parseWeather(response);
    });

}

document.getElementById("weatherForm").addEventListener("submit", btnClick);