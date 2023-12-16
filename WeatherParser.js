class WeatherParser {
    parse(link) {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.link);
        xhr.onload = () => {
            return this.processResponse(xhr.response);
        }
        xhr.send();
    }
    processResponse(responseData) {

    }
}

export default WeatherParser;
