import React from 'react'
import './CountriesListshimmer.css'

const CountriesListshimmer = () => {
    // new Array(10).fill('')

   const mapped =  Array.from({length: 10}).map((ele, i) => {
       return <div key={i} className='country-card shimmer-card'> </div>
    })

  return (
    <div className='countries-container'>
      {/* <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div>
      <div className='country-card shimmer-card'></div> */}
      {mapped}
    </div>
  )
}

export default CountriesListshimmer
