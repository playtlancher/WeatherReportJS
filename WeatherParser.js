class WeatherParser {
    parse = async (link) => {
        const response = await fetch(link);
        if(response.ok){
            return await response.json();
        }
    }
}


