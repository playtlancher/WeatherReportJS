import WeatherInfoPerHours from "./WeatherInfoPerHours.js";

export default function parseWeather(response) {
    const forecast = response.forecast;
    const forecastDays = forecast.forecastday;
    let weatherArray = [];
    for (let i = 0; i < forecastDays.length; i++) {
        let weatherArrayPerHour = [];
        for (let j = 2; j < forecastDays[i].hour.length; j += 3) {
            let hoursArray = forecastDays[i].hour;
            let URL = hoursArray[j].condition.icon;
            let tempC = hoursArray[j].temp_c;
            let feelsLike = hoursArray[j].feelslike_c;
            let pressure = hoursArray[j].pressure_mb;
            let humidity = hoursArray[j].humidity;
            let wind = (hoursArray[j].wind_kph * 1000 / 3600).toFixed(1);
            let chan = hoursArray[j].chance_of_rain;
            weatherArrayPerHour.push(new WeatherInfoPerHours(URL, tempC, feelsLike, pressure, humidity, wind, chan));
        }
        weatherArray.push(weatherArrayPerHour);
    }
    return weatherArray;

}