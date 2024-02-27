import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Nav() {

  return (
    <div className='container'>
        <div className='logo'>
        <img src={logo} alt="Logo" />
        <h1>
            The Philippines Medical Depot</h1>
        </div>
       <ul className='nav'>
        <li>
            <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to="/product"> Product</Link>
        </li>
        <li>
        <Link to="/serv"> Services</Link>
        </li>
        <li>
        <Link to="/contact"> Contact</Link>        
        </li>
       </ul>

    </div>
  )
}

export default Nav