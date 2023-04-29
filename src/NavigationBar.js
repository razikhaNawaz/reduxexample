import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <Link to="/">go to Home Page</Link>
        <Link to='/about'>go to about page</Link>
    </div>
  )
}

export default NavigationBar