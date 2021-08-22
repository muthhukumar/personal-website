import * as React from 'react'
import { isServerEnvironment } from './index'

const THEME_KEY = 'theme'

const enum Theme {
  light = 'light',
  dark = 'dark',
}

interface ThemeContextType {
  theme: Theme.light | Theme.dark | null
  toggleTheme: () => void
}

const PreferredLightThemeMediaQuery = '(prefers-color-scheme: light)'

const getPreferredThemeFromMQ = () => {
  return window.matchMedia(PreferredLightThemeMediaQuery).matches ? Theme.light : Theme.dark
}

const getPreferredTheme = () => {
  const preferredThemeFromLocalStorage = localStorage.getItem(THEME_KEY)

  if (preferredThemeFromLocalStorage) {
    return preferredThemeFromLocalStorage === Theme.light ? Theme.light : Theme.dark
  }

  const preferredThemeValueFromMQ = getPreferredThemeFromMQ()

  if (!preferredThemeValueFromMQ) {
    return Theme.light
  }

  return preferredThemeValueFromMQ
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<null | Theme.light | Theme.dark>(() => {
    if (isServerEnvironment()) {
      return null
    }

    return getPreferredTheme()
  })

  const toggleTheme = React.useCallback(() => {
    if (theme === Theme.light) {
      return setTheme(Theme.dark)
    }
    return setTheme(Theme.light)
  }, [theme])

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme])

  React.useEffect(() => {
    if (theme) {
      localStorage.setItem(THEME_KEY, theme)
    }
  }, [theme])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(PreferredLightThemeMediaQuery)

    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.light : Theme.dark)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme should be used inside the ThemeProvider')
  }

  return context
}

const clientThemeCode = `
  const Theme = { light: 'light', dark: 'dark' }

  const PreferredLightThemeMediaQuery = '(prefers-color-scheme: light)'

  const getPreferredThemeFromMQ = () => {
    return window.matchMedia(PreferredLightThemeMediaQuery).matches ? Theme.light : Theme.dark
  }

  const getPreferredTheme = () => {
    const preferredThemeFromLocalStorage = localStorage.getItem('theme')

    if (preferredThemeFromLocalStorage) {
      return preferredThemeFromLocalStorage === Theme.light ? Theme.light : Theme.dark
    }

    const preferredThemeValueFromMQ = getPreferredThemeFromMQ()

    if (!preferredThemeValueFromMQ) {
      return Theme.light
    }

    return preferredThemeValueFromMQ
  }

  const preferredTheme = getPreferredTheme()

  const documentClassList = document.documentElement.classList

  const alreadyThemeApplied =
    documentClassList.contains(Theme.light) || documentClassList.contains(Theme.light)

  if (!alreadyThemeApplied) {
    documentClassList.add(preferredTheme)
  }

  const colorSchemeMetaElement = document.querySelector('meta[name=color-scheme]')

  if (colorSchemeMetaElement) {
    if (preferredTheme === 'light') {
      colorSchemeMetaElement.content = 'light dark'
    } else {
      colorSchemeMetaElement.content = 'dark light'
    }
  }
`

const NonFlashOfWrongThemeEls = () => {
  const { theme } = useTheme()

  return (
    <>
      <meta name="color-scheme" content={theme === Theme.light ? 'light dark' : 'dark light'} />
      <script dangerouslySetInnerHTML={{ __html: clientThemeCode }}></script>
    </>
  )
}

async function handleDarkAndLightModeEls() {
  const theme = getPreferredTheme()

  const darkEls = document.querySelectorAll('dark-mode')
  const lightEls = document.querySelectorAll('light-mode')

  for (const darkEl of darkEls) {
    if (theme === 'dark') {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child)
      }
    }
    darkEl.remove()
  }
  for (const lightEl of lightEls) {
    if (theme === 'light') {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child)
      }
    }
    lightEl.remove()
  }
}

const Themed = ({
  dark,
  light,
}: {
  dark: React.ReactNode | string
  light: React.ReactNode | string
}) => {
  const { theme } = useTheme()

  if (isServerEnvironment()) {
    return (
      <>
        {React.createElement('light-mode', null, light)}
        {React.createElement('dark-mode', null, dark)}
      </>
    )
  }

  return <>{theme === Theme.light ? light : dark}</>
}

export {
  ThemeProvider,
  useTheme,
  NonFlashOfWrongThemeEls,
  handleDarkAndLightModeEls,
  Themed,
  Theme,
}
