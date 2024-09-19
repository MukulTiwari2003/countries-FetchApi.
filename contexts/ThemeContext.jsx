import { createContext, useState } from "react";

export const ThemeContext = createContext()
// console.log(ThemeContext)

export function ThemeProvider({children}){
    const [isdark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('isDarkMode'))
    )
    return <ThemeContext.Provider value={[isdark, setIsDark]}>
        {children}
        </ThemeContext.Provider>
}