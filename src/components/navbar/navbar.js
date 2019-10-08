import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return <nav>
    <Link to='/'><h3>V360</h3></Link>
    <Link style={{marginRight: '8px'}} to='/'>home</Link>
    <Link style={{marginRight: '8px'}} to='/about'>about</Link>
    <Link style={{marginRight: '8px'}} to='/contact'>about</Link>
    <Link to='/blog'>blog</Link>
  </nav>
}

export default Navbar