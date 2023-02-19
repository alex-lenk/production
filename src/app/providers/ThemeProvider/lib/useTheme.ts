import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'
import {useContext} from 'react'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    document.documentElement.setAttribute('data-theme', theme)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
