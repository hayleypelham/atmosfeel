import { useEffect } from "react"
import { LoaderCircle } from "lucide-react"
import { fetchWeather } from "../api/weather"
import DarkModeToggle from "../components/DarkModeToggle"
import weatherIcons from "../assets/weatherIcons"
import { useMutation } from "@tanstack/react-query"

type WeatherData = {
  temp: number
  condition: string
  city: string
  country: string
}

const LandingPage = () => {
  const {
    mutate: getWeather,
    data: weather,
    isPending,
    isError,
  } = useMutation<WeatherData, Error, string>({
    mutationFn: fetchWeather,
    onError: (error) => {
      console.error("Failed to fetch weather:", error.message)
    },
  })

  useEffect(() => {
    getWeather("New York") // TODO get user's location, use Chch as a fallback
  }, [getWeather])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 sm:p-10">
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full flex items-center gap-y-2 justify-between">
          <h1 className="flex gap-2 text-4xl font-extrabold">
            <span className="sr-only sm:not-sr-only">Atmosfeel</span>
            <img
              src={weatherIcons["Clouds"]}
              alt=""
              className="w-10 h-10"
              aria-hidden
            />
          </h1>
          <DarkModeToggle />
        </div>
        <div className="w-full sm:max-w-[350px] h-[350px] bg-indigo-600 dark:bg-indigo-700 text-white flex flex-col items-center justify-center gap-3 p-8 rounded-3xl">
          {isPending ? (
            <LoaderCircle className="animate-spin h-8 w-8 text-white" />
          ) : isError ? (
            <p>Whoops! Something went wrong. Give it a refresh?</p>
          ) : weather ? (
            <div className="flex flex-col gap-3 items-center">
              <h2 className="text-3xl font-semibold">{weather.city}</h2>
              <img
                src={weatherIcons[weather.condition]}
                alt={weather.condition}
                className="w-52 h-36"
              />
              <div className="flex flex-col items-center">
                <p className="flex items-start text-5xl font-semibold">
                  <span>{weather.temp.toFixed(0)}</span>
                  <span className="text-3xl font-normal opacity-80">°C</span>
                </p>
                <p className="text-2xl">{weather.condition}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
