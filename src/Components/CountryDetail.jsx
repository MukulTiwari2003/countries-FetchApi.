import React, { useContext, useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
// import {  useWindowSize } from '../../hooks/CustomHook'

const CountryDetail = () => {
    const countryName = new URLSearchParams(location.search).get('name')
    console.log(countryName)

    const {state} = useLocation()
    console.log(state)
    // const params = useParams();
    // console.log(params)
    // const countryName = params.country

    const [countyData, setCountryData] = useState(null)
    // const [isDark] = useOutletContext()
    const [isDark] = useContext(ThemeContext)
    // const windowSize = useWindowSize()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {   // destructure first element of the array
                console.log(data)
                setCountryData({
                    name: data.name.common,
                    nativeName: Object.values(data.name.nativeName)[0].common,
                    population: data.population,
                    region: data.region,
                    subregion: data.subregion,
                    capital: data.capital,
                    flag: data.flags.svg,
                    tld: data.tld,
                    languages: Object.values(data.languages).join(', '),
                    currencies: Object.values(data.currencies)
                    .map((currency) => currency.name)
                    .join(', '),
                    borders: []
                })
            })
    }, [countryName])
    return countyData === null ? (
        'loading...'
    ) : (<main className={`${isDark ? 'dark' : ''}`}>
         {/* <h1 style={{textAlign: 'center'}}>
          {windowSize.width}*{windowSize.height}
        </h1> */}
        <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
                <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
                <img src={countyData.flag} alt={`${countyData.name} flag`} />
                <div className="details-text-container">
                    <h1>{countyData.name}</h1>
                    <div className="details-text">
                        <p>
                            <b>Native Name: {countyData.nativeName}</b>
                            <span className="native-name"></span>
                        </p>
                        <p>
                            <b>
                                Population: {countyData.population.toLocaleString('en-IN')}
                            </b>
                            <span className="population"></span>
                        </p>
                        <p>
                            <b>Region: {countyData.region}</b>
                            <span className="region"></span>
                        </p>
                        <p>
                            <b>Sub Region: {countyData.subregion}</b>
                            <span className="sub-region"></span>
                        </p>
                        <p>
                            <b>Capital: {countyData.capital.join(' ')}</b>
                            <span className="capital"></span>
                        </p>
                        <p>
                            <b>Top Level Domain: {countyData.tld}</b>
                            <span className="top-level-domain"></span>
                        </p>
                        <p>
                            <b>Currencies: {countyData.currencies}</b>
                            <span className="currencies"></span>
                        </p>
                        <p>
                            <b>Languages: {countyData.languages}</b>
                            <span className="languages"></span>
                        </p>
                    </div>
                 {  countyData.borders.length !== 0 &&  <div className="border-countries">
                        <b>Border Countries:  </b>&nbsp;
                        {
                            countyData.borders.map((border) => <Link to={`/${border}`}>{border}</Link>)
                        } 
                    </div>}
                </div>
            </div>
        </div>
    </main>)
        
          
        
    
}

export default CountryDetail
