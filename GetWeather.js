const getWeather = async (link) => {
    const response = await fetch(link);
    if (response.ok) {
        return await response.json();
    }
}

export default getWeather;