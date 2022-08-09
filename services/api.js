import axios from 'axios'

const api = axios.create({
  baseURL: "HTTP: http://api.worldweatheronline.com/premium/v1/weather.ashx"
})

export default api