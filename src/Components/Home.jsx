import { useContext, useEffect, useState } from 'react'
import CountriesList from './CountriesList'

import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
// import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
// import { useWindowSize } from '../../hooks/CustomHook'



const Home = () => {
    const [query, setQuery] = useState('')
    // const [isDark] = useOutletContext()
    const [isDark] = useContext(ThemeContext)
   
  //  const windowSize = useWindowSize()
    

  return (
    <main className = {`${isDark ? 'dark' : ''}`}>
        <div className='search-filter-container '>
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQuery={setQuery}/>
        </div>
        {/* <h1 style={{textAlign: 'center'}}>
          {windowSize.width}*{windowSize.height}
        </h1> */}
        <CountriesList query={query}/>
      </main>
  )
}

export default Home
