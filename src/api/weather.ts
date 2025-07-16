import axiosInstance from "./axiosInstance"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function fetchWeather(city: string) {
  try {
    const { data } = await axiosInstance.get("/weather", {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    })
    return {
      temp: data.main.temp,
      condition: data.weather[0].main,
      city: data.name,
      country: data.sys.country,
    }
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch weather")
  }
}
