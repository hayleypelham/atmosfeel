import { useEffect, useState } from "react"
import { fetchWeather } from "./api/weather"
import weatherIcons from "./assets/weatherIcons"
import { useDarkModeToggle } from "./hooks/useDarkModeToggle"

function App() {
  const [weather, setWeather] = useState<null | {
    temp: number
    condition: string
    city: string
    country: string
  }>(null)
  const { theme, toggleTheme } = useDarkModeToggle()

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeather("New York") // TODO get user's location, use Chch as a fallback
      .then(setWeather)
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-6 sm:p-10">
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full flex flex-col items-center sm:flex-row gap-y-2 justify-between">
          <h1 className="text-gray-900 dark:text-white text-4xl font-extrabold">
            Atmosfeel 🌤️
          </h1>
          <label className="inline-flex items-center cursor-pointer mb-6">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark mode
            </span>
          </label>
        </div>
        <div className="w-full sm:max-w-[350px] bg-[#4F32FF] text-white flex flex-col items-center gap-3 p-8 rounded-3xl">
          {error && <p>Error fetching weather data</p>}
          {weather ? (
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-3xl font-semibold">{weather.city}</h2>
              <img
                src={weatherIcons[weather.condition]}
                alt={weather.condition}
                className="w-52 h-36"
              />
              <div className="flex flex-col items-center">
                <p className="text-5xl font-semibold">
                  {weather.temp.toFixed(0)}
                  <span className="opacity-80">°C</span>
                </p>
                <p className="text-2xl">{weather.condition}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
