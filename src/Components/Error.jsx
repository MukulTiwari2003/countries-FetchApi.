import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>Something Went Wrong. {error.status}</h1>
    </div>
  )
}

export default Error
