import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

type Props = {
    children: ReactNode
}

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
const THEME_STORAGE_KEY = "weather-dashboard-theme"

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark"

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark"
}

export default function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    useEffect(() => {
        const root = document.documentElement
        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

        localStorage.setItem(THEME_STORAGE_KEY, theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
