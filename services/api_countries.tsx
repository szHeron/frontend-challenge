import axios from "axios";

const api_countries = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

export default api_countries;