import { useDarkModeToggle } from "../hooks/useDarkModeToggle"
import { Moon, Sun } from "lucide-react"

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useDarkModeToggle()

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Sun className="text-gray-900 dark:text-white" />
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label={`Enable ${theme === "dark" ? "light" : "dark"} mode`}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus-visible:ring-4 peer-focus-visible:ring-indigo-300 dark:peer-focus-visible:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-600" />
      <Moon className="text-gray-900 dark:text-white" />
    </label>
  )
}

export default DarkModeToggle
