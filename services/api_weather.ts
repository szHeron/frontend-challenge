import axios from "axios";

const api_weather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default api_weather;