import React from 'react'


function Navbar() {
  return (
    <nav className='Navbar'>
      <img className='navbarlogo' src="./assets/logo.png" width=" 120px" alt="" />
     
      <ul>
        <li className= 'navbarlinks'>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/product">Product</a>
          <a href="/feedback">Feedback</a>
          <a href="/contact">Contact</a>
          
</li>
      </ul>
    </nav>
  )
}







export default Navbar