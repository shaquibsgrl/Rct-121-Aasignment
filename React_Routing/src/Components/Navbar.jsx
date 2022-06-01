import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar
