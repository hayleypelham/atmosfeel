import Clear from "./icons/weather-simple/clear.svg"
import Clouds from "./icons/weather-simple/clouds.svg"
import Rain from "./icons/weather-simple/rain.svg"
import Snow from "./icons/weather-simple/snow.svg"
import Thunderstorm from "./icons/weather-simple/thunderstorm.svg"
import Drizzle from "./icons/weather-simple/drizzle.svg"
import Atmosphere from "./icons/weather-simple/atmosphere.svg"
import Tornado from "./icons/weather-simple/tornado.svg"

const weatherIcons: Record<string, string> = {
  Clear,
  Clouds,
  Rain,
  Snow,
  Thunderstorm,
  Drizzle,
  Mist: Atmosphere,
  Fog: Atmosphere,
  Haze: Atmosphere,
  Smoke: Atmosphere,
  Dust: Atmosphere,
  Sand: Atmosphere,
  Ash: Atmosphere,
  Squall: Atmosphere,
  Tornado,
}

export default weatherIcons
