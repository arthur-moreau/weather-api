import axios from "axios";

// Open Weather api
const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export default api;