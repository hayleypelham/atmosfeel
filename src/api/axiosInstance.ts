import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 5000, // optional timeout
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
