import React, { useEffect, useState } from 'react'
// import CountriesData from '../../CountriesData.js'
import CountryCard from './CountryCard.jsx'
import CountriesListshimmer from './CountriesListshimmer.jsx'

const CountriesList = ({ query }) => {
  const [CountriesData, setCountriesData] = useState([])

  // we can use useEffect when we render component only one time or cleanUp function and render component 
  // when we want and it is used to monitor useState 
  useEffect(() => {
    fetch(' https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
  }, [])

  return (
    <>
      {/* <button onClick={() => setCountriesData([])}>Remove all countries Data</button> */}
      {!CountriesData.length ? <CountriesListshimmer /> :
        <div className='countries-container'>
          {CountriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
            ).map((country) => {
              // console.log(country)

              return <CountryCard
                key={country.name.common}
                name={country.name.common}
                capital={country.capital}
                population={country.population}
                region={country.region}
                flags={country.flags.svg}
                data={country}
              />
            })}
        </div>}
    </>
  )
}

export default CountriesList
