import axios from "axios";

const api_weather = axios.create({
    baseURL: '/api',
});

export default api_weather;