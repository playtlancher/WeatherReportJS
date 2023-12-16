import LinkBuilder from './LinkBuilder.js';
import WeatherParser from './WeatherParser.js';
function btnClick() {
    let linkBuilder = new LinkBuilder();
    let weatherParser = new WeatherParser();
    let link = linkBuilder.buildLink("Lviv", 1);
    console.log(link);
    let response = weatherParser.parse(link);
    console.log(response);
}

