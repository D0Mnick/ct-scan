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
            Home
        </li>
        <li>
            Products
        </li>
        <li>
            Services
        </li>
        <li>
            Contact Us
        </li>
       </ul>

    </div>
  )
}

export default Nav