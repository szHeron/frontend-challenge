import axios from "axios";

const api_geolocation = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});

export default api_geolocation;