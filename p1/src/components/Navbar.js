import React from 'react'
import './Navbar.css'
const Navbar = ({data}) => {
  return (
    <div className='navbar'> 
    <div className='logo'>
        <i class="fa-solid fa-lock fa-2x"></i>
        <h3>KJS shopping</h3>
    </div>
      <button className='navLogin'>{data?data.username:"login"}</button>
    </div>
  )
}

export default Navbar
