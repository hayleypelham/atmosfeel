import { useEffect, useState } from "react"
import { fetchWeather } from "./api/weather"

function App() {
  const [weather, setWeather] = useState<null | {
    temp: number
    condition: string
    city: string
    country: string
  }>(null)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeather("Rangiora")
      .then(setWeather)
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold">Atmosfeel 🌤️</h1>
        <div>
          {error && <p>Error fetching weather data</p>}
          {weather ? (
            <>
              <p>
                Weather in {weather.city}, {weather.country}:
              </p>
              <p>
                {weather.temp}°C, {weather.condition}
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
