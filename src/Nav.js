import React from 'react'
import { Link } from 'react-router-dom'
import DrinkSearch from './DrinkSearch'

function Nav(props){
  return (
  <nav className={`navbar navbar-${props.style}`}>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'> {props.title} </Link>
      </div>
      <ul className='nav navbar-nav'>
        <Link to="/">Test</Link>
      </ul>
    </div>
  </nav>
)
}

export default Nav
