import { useEffect, useState } from "react"

export function useDarkModeToggle() {
  const getPreferredTheme = () => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark" || stored === "light") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? getPreferredTheme() : "light",
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return { theme, toggleTheme }
}
