import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
    // const [isDark, setIsDark] = theme
    const [isDark, setIsDark] = useContext(ThemeContext)

    // if(isDark){
    //     document.body.classList.add('dark')
    // }
    // else{
    //     document.body.classList.remove('dark')
    // }

    return (
        <>
            <header className={`header-container ${isDark ? 'dark' : ''}`}>
                <div className="header-content">
                    <h2 className="title">
                        <a href="/">Where in the world?</a>
                    </h2>
                    <p className="theme-changer" onClick={() => {
                        // document.body.classList.toggle('dark')
                        setIsDark(!isDark)
                        localStorage.setItem('isDarkMode', !isDark)
                    }}>
                        <i className={`fa-solid fa-${isDark ? "moon" : "sun"}`} />
                        &nbsp;&nbsp;{isDark ? 'dark' : 'light'}
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
