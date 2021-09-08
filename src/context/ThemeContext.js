import { createContext, useState, useRef, useEffect } from "react"
import { setUserSettings } from "utils/user"

const detectedTheme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

/**
 * @type {React.Context<{
 *  theme: string
 *  setTheme: (selectedTheme?: string) => void
 * }>} ThemeContext
 */
const ThemeContext = createContext({
  setTheme: () => {},
  theme: detectedTheme,
})

const { Provider } = ThemeContext


export { ThemeContext }

/**
 * @type {FC} ThemeProvider
 */
const ThemeProvider = ({ children }) => {
  const documentRef = useRef(document.documentElement)
  const [theme, setTheme] = useState(detectedTheme)

  const handleThemeChange = (selectedTheme) => {
    if(documentRef.current && selectedTheme !== theme) {
      documentRef.current.setAttribute('data-theme', selectedTheme)
      setTheme(selectedTheme)
      setUserSettings({ theme: selectedTheme })
    }
  }

  useEffect(() => {
    if(documentRef.current) {
      documentRef.current.setAttribute('data-theme', detectedTheme)
      setUserSettings({ theme: detectedTheme })
    }
  }, [])

  return (
    <Provider value={{ theme, setTheme: handleThemeChange, }}>
      {children}
    </Provider>
  )
}

export default ThemeProvider
