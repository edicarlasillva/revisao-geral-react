import { createContext, useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import GlobalStyles from './styles/global'

import light from './themes/light'
import dark from './themes/dark'

type Theme = typeof light
interface ThemeContextTypes {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextTypes | undefined>(
  undefined,
)

export function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const themeContextValue: ThemeContextTypes = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={themeContextValue}>
        <Router />
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
