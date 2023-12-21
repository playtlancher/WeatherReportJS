export default function buildLink(city, days)
{
    let link = "http://api.weatherapi.com/v1/forecast.json?key=3dd7434243bb4e06933153229230509";
    link += "&q=" + city + "&days=" + days + "&hour=10";

    return link;
}
